import innet, { HandlerPlugin, useApp, useHandler, useNewHandler } from 'innet'
import { JSXElement } from '@innet/jsx'
import { OpenAPIV3_1 as OpenApi } from 'openapi-types'

import { apiContext } from '../../hooks/useApi'

export interface ApiProps {
  /** The title of the API. */
  title: string

  /**
   * The version of the OpenAPI document (which is distinct from the
   * [OpenAPI Specification version](https://swagger.io/specification/#oas-version)
   * or the API implementation version).
   * */
  version: string

  /** A short summary of the API. */
  summary?: string

  /** A description of the API. [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation. */
  description?: string

  /** A URL to the Terms of Service for the API. This MUST be in the form of a URL. */
  termsOfService?: string
}

export const api: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { props, children } = useApp<JSXElement<string, ApiProps>>()

  const docs: OpenApi.Document = {
    openapi: '3.1.0',
    info: props,
    components: {},
    paths: {},
    servers: [],
  }

  handler[apiContext.key] = { docs, endpoints: {} }

  innet(children, handler)
}
