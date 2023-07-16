import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useEndpoint } from '../../../hooks'
import { ResponseObject, SchemaObject } from '../../../types'

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
  const { operation, props: { path } } = useEndpoint()
  const children = useChildren()
  const handler = useNewHandler()

  if (!operation.responses) {
    operation.responses = {}
  }

  if (operation.responses[status]) {
    throw Error(`status ${status} for '${path}' already used`)
  }

  const schema: SchemaObject = {}

  const response: ResponseObject = {
    description,
    content: {
      'application/json': {
        schema,
      },
    },
  }

  operation.responses[status] = response

  handler[schemaContext.key] = schema satisfies SchemaContext

  innet(children, handler)
}
