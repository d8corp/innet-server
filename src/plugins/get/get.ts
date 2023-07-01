import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { operationContext, useApi, useTag } from '../../hooks'
import { OperationObject } from '../../types'

export interface GetProps {
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
}

export const get: HandlerPlugin = () => {
  const handler = useNewHandler()
  const tag = useTag()
  const { docs, endpoints } = useApi()
  const { path, summary, description } = useProps<GetProps>()
  const children = useChildren()
  const { paths } = docs

  const operation: OperationObject = {}

  if (summary) {
    operation.summary = summary
  }

  if (description) {
    operation.description = description
  }

  if (tag) {
    operation.tags = [tag.name]
  }

  if (!paths[path]) {
    paths[path] = {}
  }

  if (paths[path].get) {
    throw Error(`You cannot use the same endpoints GET:${path}`)
  }

  paths[path].get = operation as any

  handler[operationContext.key] = operation

  innet(children, handler)
}
