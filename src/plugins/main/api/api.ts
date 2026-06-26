import { type Handler, type HandlerPlugin, innet, net, useApp, useNewHandler } from 'innet'
import { useProps } from '@innet/jsx'

import {
  actionContext,
  type ApiContext,
  apiContext,
  paramsContext,
  type ServerPlugin,
  serverPlugins,
  useAction,
  useServer,
  useServerPlugin,
} from '../../../hooks'
import {
  type ApiErrorSchema,
  type ApiErrorSchemaRefs,
  type Document,
  type Endpoint,
  type Endpoints,
  type EndpointsMethods,
} from '../../../types'
import { type Action, JSONString } from '../../../utils'
import { type Rule, RulesError } from '../../../utils/rules'

export interface ApiProps {
  /** API content including endpoints, tags, and documentation elements */
  children?: any

  /**
   * A description of the API.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   *
   * @example
   * ```tsx
   * <api
   *   title="My API"
   *   description="A comprehensive API for managing resources"
   * />
   * ```
   */
  description?: string

  /**
   * Override default OpenAPI schemas for built-in API error responses.
   * Allows customization of error data structure for automatic validation errors.
   *
   * Available error codes: `'requestValidation'`, `'requestBodyContentType'`.
   *
   * Only works when `schemaGeneration` is enabled.
   *
   * @example
   * ```tsx
   * <api
   *   schemaGeneration
   *   errorSchema={{
   *     requestValidation: {
   *       type: 'object',
   *       properties: {
   *         error: { type: 'string' },
   *         details: { type: 'object' }
   *       }
   *     }
   *   }}
   * />
   * ```
   */
  errorSchema?: Partial<ApiErrorSchema>

  /**
   * Override default OpenAPI component schema reference names for built-in API errors.
   * Useful when you want to use custom schema names in OpenAPI documentation.
   *
   * Available error codes: `'requestValidation'`, `'requestBodyContentType'`.
   *
   * Only works when `schemaGeneration` is enabled.
   *
   * @example
   * ```tsx
   * <api
   *   schemaGeneration
   *   errorSchemaRefs={{
   *     requestValidation: 'CustomValidationError',
   *     requestBodyContentType: 'CustomContentTypeError'
   *   }}
   * />
   * ```
   */
  errorSchemaRefs?: Partial<ApiErrorSchemaRefs>

  /**
   * Regular expression to exclude paths from the API.
   *
   * @example
   * ```tsx
   * <api exclude={/^\/internal/} />
   * ```
   */
  exclude?: RegExp

  /**
   * Regular expression to include only matching paths in the API.
   *
   * @example
   * ```tsx
   * <api include={/^\/api\/v1/} />
   * ```
   */
  include?: RegExp

  /**
   * URL path prefix scopes the API.
   *
   * @default ''
   * @env INNET_API_PREFIX
   *
   * @example
   * ```tsx
   * <api prefix="/api/v1" />
   * ```
   */
  prefix?: string

  /**
   * Enable automatic schema generation for OpenAPI documentation.
   * When enabled, generates schemas for request validation.
   *
   * Affects validation of request parameters:
   * - Returns 'requestValidation' error (400) when request data fails validation rules
   * - Returns 'requestBodyContentType' error (400) when required body is missing or has unsupported content type
   *
   * Works together with `errorSchema` and `errorSchemaRefs` to customize these built-in error schemas.
   *
   * @example
   * ```tsx
   * <api
   *   schemaGeneration
   *   errorSchemaRefs={{
   *     requestValidation: 'ValidationError'
   *   }}
   * />
   * ```
   */
  schemaGeneration?: boolean

  /**
   * A short summary of the API.
   *
   * @example
   * ```tsx
   * <api summary="Resource Management API" />
   * ```
   */
  summary?: string

  /**
   * A URL to the Terms of Service for the API.
   * This MUST be in the form of a URL.
   *
   * @example
   * ```tsx
   * <api termsOfService="https://example.com/terms" />
   * ```
   */
  termsOfService?: string

  /**
   * The title of the API.
   *
   * @default ''
   *
   * @example
   * ```tsx
   * <api title="My API" />
   * ```
   */
  title?: string

  /**
   * The version of the OpenAPI document (which is distinct from the
   * [OpenAPI Specification version](https://swagger.io/specification/#oas-version)
   * or the API implementation version).
   *
   * @default '0.0.0'
   * @env INNET_API_VERSION
   *
   * @example
   * ```tsx
   * <api version="1.2.3" />
   * ```
   */
  version?: string
}

export const api: HandlerPlugin = () => {
  const handler = useNewHandler()
  const props = useProps<ApiProps>()
  const server = useServer()

  const {
    children,
    errorSchema,
    errorSchemaRefs,
    exclude,
    include,
    prefix = process.env.INNET_API_PREFIX || '',
    schemaGeneration,
    title = '',
    version = process.env.INNET_API_VERSION || '0.0.0',
    ...rest
  } = props

  server.initAPI(props)

  const info = { ...rest, title, version }

  const endpoints: Endpoints = {}
  const docs: Document = {
    info,
    openapi: '3.1.0',
    paths: {},
  }
  const plugins = new Map<ServerPlugin, Handler>()

  const context: ApiContext = { docs, endpoints, prefix, props, refRules: {} }

  const condition: any = (action: Action) => {
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

  serverPlugins.set(handler, plugins)
  apiContext.set(handler, context)

  useServerPlugin(async () => {
    const app = useApp()
    const action = useAction()

    if (!condition(action as any)) return

    const path = action.parsedUrl.path
    const url = path.endsWith('/') ? path.slice(0, -1) : path
    const {
      req,
      res,
    } = action

    if (url === (prefix || '')) {
      res.setHeader('Content-Type', 'application/json')
      res.write(JSONString(docs))
      res.end()
      return null
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

          function checkActionRules (rules?: Rule, key: 'body' | 'cookies' | 'headers' | 'search' = 'search') {
            if (rules) {
              try {
                action[key] = rules(action[key])
              } catch (e: unknown) {
                res.setHeader('Content-Type', 'application/json')
                if (e instanceof RulesError) {
                  res.statusCode = 400
                  res.write(JSONString({
                    data: {
                      ...e.data,
                      in: key,
                    },
                    error: 'requestValidation',
                  }))
                  res.end()
                } else {
                  console.error(e)
                  res.statusCode = 500
                  res.write(JSONString({
                    data: { in: key },
                    error: 'unknown',
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
              res.write(JSONString({ error: 'requestBodyContentType' }))
              res.end()

              return true
            }

            if (checkActionRules(bodyRules, 'body')) return true
          }

          const app = useApp()

          for (const [plugin, handler] of runEndpoint.plugins) {
            const actionHandler = Object.create(handler)
            paramsContext.set(actionHandler, params)
            actionContext.set(actionHandler, action)
            const result = await net(plugin, app, actionHandler)

            if (result === undefined) continue

            innet(result, actionHandler)
            return true
          }

          return true
        }

        if (currentEndpoint.static?.[key]?.plugins) {
          if (!await run(currentEndpoint.static?.[key], params)) continue

          return null
        }

        if (currentEndpoint.dynamic) {
          for (const dynamicEndpoint of currentEndpoint.dynamic) {
            if (dynamicEndpoint.plugins) {
              if (!await run(dynamicEndpoint, { ...params, [dynamicEndpoint.key.slice(1, -1)]: key })) continue

              return null
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

    for (const [plugin, handler] of plugins) {
      const newHandler = Object.create(handler)
      actionContext.set(newHandler, action)

      const result = await net(plugin, app, newHandler)

      if (result === undefined) continue
      innet(result, newHandler)
      return null
    }
  })

  innet(children, handler)
}
