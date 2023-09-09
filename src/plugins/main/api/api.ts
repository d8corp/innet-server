import innet, { type Handler, type HandlerPlugin, useApp, useNewHandler } from 'innet'
import { type JSXElement } from '@innet/jsx'
import { type IncomingMessage, type ServerResponse } from 'http'
import { onDestroy } from 'watch-state'

import { type PresetCondition, presetCondition } from '../preset'

import {
  actionContext,
  type ApiContext,
  apiContext,
  paramsContext,
  useServer,
} from '../../../hooks'
import {
  type Document,
  type Endpoint,
  type Endpoints,
  type EndpointsMethods,
  type RequestPlugin,
} from '../../../types'
import { Action, JSONString } from '../../../utils'
import { type Rule, RulesError } from '../../../utils/rules'

export interface ApiProps {
  /** The title of the API. */
  title?: string

  /**
   * The version of the OpenAPI document (which is distinct from the
   * [OpenAPI Specification version](https://swagger.io/specification/#oas-version)
   * or the API implementation version).
   * @example: 0.0.1
   * @default: 0.0.0
   * */
  version?: string

  /** A short summary of the API. */
  summary?: string

  /** A description of the API. [CommonMark syntax](https://spec.commonmark.or.org) MAY be used for rich text representation. */
  description?: string

  /** A URL to the Terms of Service for the API. This MUST be in the form of a URL. */
  termsOfService?: string

  /** URL path prefix scopes the API. */
  prefix?: string
  include?: RegExp
  exclude?: RegExp
}

export const api: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { props = {}, children } = useApp<JSXElement<string, ApiProps>>()
  const { server } = useServer()
  const {
    prefix = '',
    title = '',
    include,
    exclude,
    ...rest
  } = props
  const info = { ...rest, version: rest.version ?? '0.0.0', title }

  const endpoints: Endpoints = {}
  const docs: Document = {
    openapi: '3.1.0',
    info,
    paths: {},
  }
  const requestPlugins = new Set<RequestPlugin>()

  const context: ApiContext = { docs, endpoints, prefix, requestPlugins, refRules: {} }

  const condition: PresetCondition = action => {
    const path = action.parsedUrl.path
    const url = path.endsWith('/') ? path.slice(0, -1) : path

    if (!url.startsWith(prefix) || exclude?.test(url)) {
      return false
    }

    if (include && !include.test(url)) {
      return false
    }

    return true
  }

  apiContext.set(handler, context)
  presetCondition.set(handler, condition)

  innet(children, handler)

  const listener = async (req: IncomingMessage, res: ServerResponse) => {
    if (res.writableEnded) return

    const action = new Action(req, res)

    const path = action.parsedUrl.path
    const url = path.endsWith('/') ? path.slice(0, -1) : path

    if (!condition(action)) {
      return
    }

    for (const requestPlugin of requestPlugins) {
      const result = requestPlugin(action)

      if (!result) continue

      const newHandler = Object.create(handler)
      actionContext.set(newHandler, action)
      innet(result, newHandler)
      return
    }

    if (url === (prefix || '')) {
      res.setHeader('Content-Type', 'application/json')
      res.write(JSONString(docs))
      res.end()
      return
    }

    const method = (req.method?.toLowerCase() ?? 'get') as EndpointsMethods
    const rawSplitPath = url.slice(prefix.length).split('/').slice(1)
    const splitPath = rawSplitPath.at(-1) ? rawSplitPath : rawSplitPath.slice(0, -1)
    const endpoint = endpoints[method]
    const endpointQueue: [number, Endpoint, any][] = endpoint ? [[0, endpoint, {}]] : []

    while (endpointQueue.length > 0) {
      const [deep, currentEndpoint, params] =
        endpointQueue.shift() as [number, Endpoint, any]
      const key = splitPath[deep]

      if (deep + 1 === splitPath.length) {
        async function run (runEndpoint: Endpoint, params: any) {
          const pathRules = runEndpoint.rules?.path
          const headerRules = runEndpoint.rules?.header
          const cookieRules = runEndpoint.rules?.cookie
          const searchRules = runEndpoint.rules?.search
          const bodyRules = runEndpoint.rules?.body

          if (pathRules) {
            try {
              Object.assign(params, pathRules(params, { in: 'path' }))
            } catch {
              return false
            }
          }

          function checkActionRules (rules?: Rule, key: 'search' | 'cookies' | 'headers' | 'body' = 'search') {
            if (rules) {
              try {
                action[key] = rules(action[key])
              } catch (e: unknown) {
                res.setHeader('Content-Type', 'application/json')
                if (e instanceof RulesError) {
                  res.statusCode = 400
                  res.write(JSONString({
                    error: 'requestValidation',
                    data: {
                      ...e.data,
                      in: key,
                    },
                  }))
                  res.end()
                } else {
                  console.error(e)
                  res.statusCode = 500
                  res.write(JSONString({
                    error: 'unknown',
                    data: { in: key },
                  }))
                  res.end()
                }
                return true
              }
            }

            return false
          }

          if (checkActionRules(headerRules, 'headers')) return true
          if (checkActionRules(cookieRules, 'cookies')) return true
          if (checkActionRules(searchRules, 'search')) return true

          if (bodyRules) {
            await action.parseBody()

            if (!action.body) {
              res.statusCode = 400
              res.setHeader('Content-Type', 'application/json')
              res.write(JSONString({
                error: 'requestBodyContentType',
              }))
              res.end()

              return true
            }

            if (checkActionRules(bodyRules, 'body')) return true
          }

          const newHandler = Object.create(runEndpoint.handler as Handler)
          paramsContext.set(newHandler, params)
          actionContext.set(newHandler, action)

          innet(runEndpoint.content, newHandler)

          return true
        }

        if (currentEndpoint.static?.[key]?.content) {
          if (!await run(currentEndpoint.static?.[key], params)) continue

          return
        }

        if (currentEndpoint.dynamic) {
          for (const dynamicEndpoint of currentEndpoint.dynamic) {
            if (dynamicEndpoint.content) {
              if (!await run(dynamicEndpoint, { ...params, [dynamicEndpoint.key.slice(1, -1)]: key })) continue

              return
            }
          }
        }

        break
      }

      if (currentEndpoint.static?.[key]) {
        endpointQueue.push([deep + 1, currentEndpoint.static[key], params])
      }

      if (currentEndpoint.dynamic) {
        for (const dynamicEndpoint of currentEndpoint.dynamic) {
          endpointQueue.push([deep + 1, dynamicEndpoint, { ...params, [dynamicEndpoint.key.slice(1, -1)]: key }])
        }
      }
    }

    if (context.fallback) {
      const newHandler = Object.create(context.fallback.handler)
      actionContext.set(newHandler, action)
      innet(context.fallback.children, newHandler)
    } else {
      res.statusCode = 404
      res.end()
    }
  }

  server.on('request', listener as any)

  onDestroy(() => {
    server.off('request', listener as any)
  })
}
