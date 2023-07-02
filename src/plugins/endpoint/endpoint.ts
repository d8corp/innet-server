import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { operationContext, useApi, useTag } from '../../hooks'
import { EndpointsMethods, OperationObject } from '../../types'

export interface EndpointProps {
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
   * An optional, string summary, intended to apply to all operations in this path.
   * */
  summary?: string

  /**
   * An optional, string description, intended to apply to all operations in this path.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /**
   * Declares this operation to be deprecated.
   * Consumers SHOULD refrain from usage of the declared operation.
   * Default value is false.
   * */
  deprecated?: boolean
}

export const endpoint: HandlerPlugin = () => {
  const handler = useNewHandler()
  const tag = useTag()
  const { docs, endpoints } = useApi()
  const { path, summary, description, deprecated, method } = useProps<EndpointProps>()
  const children = useChildren()
  const { paths } = docs

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

  if (!paths[path]) {
    paths[path] = {}
  }

  if (paths[path][method]) {
    throw Error(`You cannot use the same endpoints ${method}:${path}`)
  }

  paths[path][method] = operation as any

  handler[operationContext.key] = { operation, path }

  innet(children, handler)
}