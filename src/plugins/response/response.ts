import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { responseContext, useApi, useOperation } from '../../hooks'

export interface ResponseProps {
  /**
   * A description of the response.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description: string

  /**
   * Any [HTTP status code](https://swagger.io/specification/#http-codes) can be used as the property.
   * To define a range of response codes, this field MAY contain the uppercase wildcard character X.
   * For example, 2XX represents all response codes between [200-299].
   * Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX.
   * */
  status?: number | 'default'
}

export const response: HandlerPlugin = () => {
  const { description, status = 'default' } = useProps<ResponseProps>()
  const { operation, path } = useOperation()
  const children = useChildren()
  const handler = useNewHandler()

  if (!operation.responses) {
    operation.responses = {}
  }

  if (operation.responses[status]) {
    throw Error(`status ${status} for '${path}' already used`)
  }

  const response = {
    description,
  }

  operation.responses[status] = response

  handler[responseContext.key] = {
    response,
  }

  innet(children, handler)
}
