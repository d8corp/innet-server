import innet, { HandlerPlugin, useApp, useNewHandler } from 'innet'
import { JSXElement } from '@innet/jsx'
import { ServerResponse } from 'http'
import { onDestroy } from 'watch-state'

import { useServer } from '../../hooks'
import { apiContext } from '../../hooks/useApi'
import { Document, Endpoints } from '../../types'

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

  handler[apiContext.key] = { docs, endpoints, prefix }

  const listener = (req: Request, res: ServerResponse) => {
    if (res.writableEnded) return

    if (req.url === (prefix || '/')) {
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify(docs))
      res.end()
    }
  }

  server.on('request', listener)
  onDestroy(() => {
    server.off('request', listener)
  })

  innet(children, handler)
}
