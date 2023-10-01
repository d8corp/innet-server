import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { endpointContext, type ServerPlugin, serverPlugins, useApi, useTag } from '../../../hooks'
import { type EndpointsMethods, type OperationObject } from '../../../types'
import { getEndpoint } from '../../../utils'

export interface EndpointProps {
  /**
   * Declares this operation to be deprecated.
   * Consumers SHOULD refrain from usage of the declared operation.
   * Default value is false.
   * */
  deprecated?: boolean
  /**
   * An optional, string description, intended to apply to all operations in this path.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /**
   * A method of the endpoint.
   * */
  method: EndpointsMethods

  /**
   * A relative path to an individual endpoint.
   * The property MUST begin with a forward slash (/).
   * Path templating is allowed.
   * When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts.
   * Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.
   * */
  path: string

  /**
   * Declares this operation to make an endpoint private.
   * That means the endpoint should not be described and will not be shown in the Open API documentation.
   * */
  private?: boolean

  /**
   * An optional, string summary, intended to apply to all operations in this path.
   * */
  summary?: string
}

export const endpoint: HandlerPlugin = () => {
  const handler = useNewHandler()
  const tag = useTag()
  const {
    docs,
    endpoints,
  } = useApi()
  const props = useProps<EndpointProps>()
  const {
    deprecated,
    description,
    method,
    path,
    private: privateMode,
    summary,
  } = props
  const children = useChildren()
  const { paths } = docs

  if (!paths) throw Error('cannot find paths in docs')

  if (!paths[path]) {
    paths[path] = {}
  }

  // @ts-expect-error: it's always an object
  if (paths[path][method]) {
    throw Error(`You cannot use the same endpoints ${method}:${path}`)
  }

  const operation: OperationObject = {}

  if (summary) {
    operation.summary = summary
  }

  if (description) {
    operation.description = description
  }

  if (deprecated) {
    operation.deprecated = deprecated
  }

  if (tag) {
    operation.tags = [tag.name]
  }

  if (!privateMode) {
    // @ts-expect-error: it's always an object
    paths[path][method] = operation as any
  }

  if (!endpoints[method]) {
    endpoints[method] = { key: '', plugins: new Set<ServerPlugin>() }
  }

  // @ts-expect-error: it's always an object
  const endpoint = getEndpoint(path, endpoints[method])

  // @ts-expect-error: it's always an object
  endpointContext.set(handler, { endpoint, operation, props })

  // @ts-expect-error: it's always an object
  serverPlugins.set(handler, endpoint.plugins)

  innet(children, handler)
}
