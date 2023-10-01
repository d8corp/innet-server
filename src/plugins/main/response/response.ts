import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import { endpointContext, ruleContext, schemaContext, useEndpoint, useThrow } from '../../../hooks'
import { type EndpointRules, type ResponseObject, type SchemaObject } from '../../../types'
import { getOrAdd } from '../../../utils'
import {
  type ErrorStatuses,
  errorStatuses,
  type RedirectStatuses,
  redirectStatuses,
  type SuccessStatuses,
  successStatuses,
} from '../../request'

export type StatusKey = ErrorStatuses | RedirectStatuses | SuccessStatuses

export interface ResponseProps {
  /**
   * A description of the response.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /**
   * Any [HTTP status code](https://swagger.io/specification/#http-codes) can be used as the property.
   * To define a range of response codes, this field MAY contain the uppercase wildcard character X.
   * For example, 2XX represents all response codes between [200-299].
   * Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX.
   * */
  status?: 'default' | `${1 | 2 | 3 | 4 | 5}XX` | StatusKey | number

  type?: string
}
export const statuses: Record<StatusKey, number> = {
  ...errorStatuses,
  ...redirectStatuses,
  ...successStatuses,
}

export const response: HandlerPlugin = () => {
  let {
    description = '',
    status = 'default',
    type = 'application/json',
  } = useProps<ResponseProps>() || {}
  const {
    operation,
    props: { path },
  } = useEndpoint()
  const children = useChildren()
  const handler = useNewHandler()
  const endpoint = useContext(endpointContext)

  if (status in statuses) {
    status = statuses[status as StatusKey]
  }

  if (!endpoint) {
    useThrow('<{type}> MUST be placed in <endpoint> element')
  }

  if (!operation.responses) {
    operation.responses = {}
  }

  const defaultResponse = operation.responses[status] as ResponseObject

  if (defaultResponse?.content?.[type]) {
    throw Error(`status ${status} and type ${type} for '${path}' already used`)
  }

  const schema: SchemaObject = {}

  const response: ResponseObject = {
    content: {
      ...defaultResponse?.content,
      [type]: {
        schema,
      },
    },
    description,
  }

  operation.responses[status] = response

  schemaContext.set(handler, schema)

  const rules: EndpointRules = getOrAdd(endpoint, 'endpoint.rules', [{}, {}])

  ruleContext.set(handler, rule => {
    rules.response = rule
  })

  innet(children, handler)
}
