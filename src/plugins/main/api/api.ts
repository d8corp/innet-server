import innet, { type Handler, type HandlerPlugin, useApp, useNewHandler } from 'innet'
import { type JSXElement } from '@innet/jsx'
import { type IncomingMessage, type ServerResponse } from 'http'
import { onDestroy } from 'watch-state'

import {
  actionContext,
  type ApiContext,
  apiContext,
  paramsContext,
  requestContext,
  responseContext,
  useServer,
} from '../../../hooks'
import {
  type Document,
  type Endpoint,
  type EndpointRule,
  type Endpoints,
  type EndpointsMethods,
  type RequestPlugin,
} from '../../../types'
import { Action } from '../../../utils'

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
}

export const api: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { props = {}, children } = useApp<JSXElement<string, ApiProps>>()
  const { server } = useServer()
  const { prefix = '', title = '', ...rest } = props
  const info = { ...rest, version: rest.version ?? '0.0.0', title }

  const endpoints: Endpoints = {}
  const docs: Document = {
    openapi: '3.1.0',
    info,
    paths: {},
  }
  const requestPlugins = new Set<RequestPlugin>()

  const context: ApiContext = { docs, endpoints, prefix, requestPlugins, refFormatters: {}, refValidators: {} }

  apiContext.set(handler, context)

  const listener = async (req: IncomingMessage, res: ServerResponse) => {
    if (res.writableEnded) return

    const action = new Action(req)

    const path = action.parsedUrl.path
    const url = path.endsWith('/') ? path.slice(0, -1) : path

    if (url === (prefix || '')) {
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify(docs))
      res.end()
      return
    }

    if (!url.startsWith(prefix)) {
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
            let isValid = false
            for (
              const [
                formatter,
                validation,
              ] of pathRules
            ) {
              let currentParams = params

              if (currentParams && formatter) {
                currentParams = formatter(currentParams)
              }

              if (!validation?.(currentParams)) {
                params = currentParams
                isValid = true
                break
              }
            }

            if (!isValid) return false
          }

          function checkActionRules (rules?: EndpointRule<any, any, any>[], key: 'search' | 'cookies' | 'headers' | 'body' = 'search') {
            if (rules) {
              let ok = false
              const errors: any[] = []

              for (const [formatter, validator] of rules) {
                let currentData = action[key] as object

                if (formatter) {
                  currentData = { ...action[key] }
                  currentData = formatter(currentData)
                }

                const error = validator?.(currentData)

                if (!error) {
                  action[key] = currentData as any
                  ok = true
                  break
                }

                errors.push(error)
              }

              if (!ok) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.write(JSON.stringify({
                  error: 'requestValidation',
                  data: {
                    ...errors[0],
                    in: key,
                    or: errors.length > 1 ? errors.slice(1) : undefined,
                  },
                }))
                res.end()

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
              res.write(JSON.stringify({
                error: 'requestBodyContentType',
              }))
              res.end()

              return true
            }

            if (checkActionRules(bodyRules, 'body')) return true
          }

          const newHandler = Object.create(runEndpoint.handler as Handler)
          responseContext.set(newHandler, res)
          requestContext.set(newHandler, req)
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

    for (const requestPlugin of requestPlugins) {
      if (requestPlugin(req, res)) return
    }

    if (context.fallback) {
      const newHandler = Object.create(context.fallback.handler)
      newHandler[responseContext.key] = res
      newHandler[requestContext.key] = req
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

  innet(children, handler)
}
