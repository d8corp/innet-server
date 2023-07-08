import innet, { HandlerPlugin, useApp, useNewHandler } from 'innet'
import { validation as validate } from '@cantinc/utils'
import { JSXElement } from '@innet/jsx'
import { ServerResponse } from 'http'
import { onDestroy } from 'watch-state'

import { ApiContext, apiContext, paramsContext, requestContext, responseContext, useServer } from '../../../hooks'
import { Document, Endpoint, Endpoints, Params } from '../../../types'
import { format } from '../../../utils'

export interface ApiProps {
  /** The title of the API. */
  title: string

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

  /** A description of the API. [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation. */
  description?: string

  /** A URL to the Terms of Service for the API. This MUST be in the form of a URL. */
  termsOfService?: string

  /** A URL prefix for paths. */
  prefix?: string
}

export const api: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { props, children } = useApp<JSXElement<string, ApiProps>>()
  const { server } = useServer()
  const { prefix = '', ...rest } = props
  const info = { ...rest, version: rest.version || '0.0.0' }

  const endpoints: Endpoints = {}
  const docs: Document = {
    openapi: '3.1.0',
    info,
    components: {},
    paths: {},
    servers: [],
  }

  const context: ApiContext = { docs, endpoints, prefix }

  handler[apiContext.key] = context

  const listener = (req: Request, res: ServerResponse) => {
    if (res.writableEnded) return

    const url = req.url.endsWith('/') ? req.url.slice(0, -1) : req.url

    if (url === (prefix || '')) {
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify(docs))
      res.end()
      return
    }

    if (!url.startsWith(prefix)) {
      return
    }

    const method = req.method.toLowerCase()
    const rawSplitPath = req.url.slice(prefix.length).split('/').slice(1)
    const splitPath = rawSplitPath.at(-1) ? rawSplitPath : rawSplitPath.slice(0, -1)
    const endpoint = endpoints[method]
    const endpointQueue: [number, Endpoint, Params][] = endpoint ? [[0, endpoint, {}]] : []

    while (endpointQueue.length) {
      const [deep, currentEndpoint, params] = endpointQueue.shift()
      const key = splitPath[deep]

      if (deep + 1 === splitPath.length) {
        function run (runEndpoint: Endpoint, params: Params) {
          const rules = runEndpoint.rules?.path

          if (rules) {
            let ok = false
            for (const [formatter, validation] of rules) {
              let currentParams = params

              if (formatter) {
                currentParams = { ...params }
                format(currentParams, formatter)
              }

              if (!validation || !validate(validation, currentParams)) {
                params = currentParams
                ok = true
                break
              }
            }

            if (!ok) return false
          }

          const newHandler = Object.create(runEndpoint.handler)
          newHandler[responseContext.key] = res
          newHandler[requestContext.key] = req
          newHandler[paramsContext.key] = params

          innet(runEndpoint.content, newHandler)

          return true
        }

        if (currentEndpoint.static?.[key]?.content) {
          if (!run(currentEndpoint.static?.[key], params)) continue

          return
        }

        if (currentEndpoint.dynamic) {
          for (const dynamicEndpoint of currentEndpoint.dynamic) {
            if (dynamicEndpoint.content) {
              if (!run(dynamicEndpoint, { ...params, [dynamicEndpoint.key.slice(1, -1)]: key })) continue

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
      newHandler[responseContext.key] = res
      newHandler[requestContext.key] = req
      innet(context.fallback.children, newHandler)
    } else {
      res.statusCode = 404
      res.end()
    }
  }

  server.on('request', listener)
  onDestroy(() => {
    server.off('request', listener)
  })

  innet(children, handler)
}
