import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { paramContext, SchemaContext, schemaContext, useEndpoint } from '../../../hooks'
import { EndpointRule, EndpointRules, InParam, ParameterObject, SchemaObject } from '../../../types'
import { getOrAdd } from '../../../utils'

const inMap: Record<InParam, keyof EndpointRules> = {
  query: 'search',
  path: 'path',
  cookie: 'cookie',
  header: 'header',
}

export interface ParamProps {
  /**
   * The location of the parameter.
   * Possible values are "query", "header", "path" or "cookie".
   * */
  in: InParam

  /**
   * The name of the parameter. Parameter names are *case sensitive*.
   *
   * - If `in` is "path", the `name` field MUST correspond to a template expression occurring within the `path` field in the `endpoint`. See [Path Templating](https://swagger.io/specification/#path-templating) for further information.
   * - If `in` is "header" and the `name` field is "Accept", "Content-Type" or "Authorization", the parameter definition SHALL be ignored.
   * - For all other cases, the `name` corresponds to the parameter name used by the `in` property.
   * */
  name: string

  /**
   * A brief description of the parameter.
   * This could contain examples of use.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /**
   * Determines whether this parameter is mandatory.
   * If the parameter location is "path", this property is `true` and its value MUST be `true`.
   * Otherwise, the property MAY be included and its default value is `false`.
   * */
  required?: boolean

  /**
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
   * Default value is `false`.
   * */
  deprecated?: boolean
}

export const param: HandlerPlugin = () => {
  const { operation, endpoint } = useEndpoint()

  if (!operation.parameters) {
    operation.parameters = []
  }

  const children = useChildren()
  const props = useProps<ParamProps>()
  const params: ParameterObject = { ...props }

  if (props.in === 'path') {
    params.required = params.required ?? true
  }

  operation.parameters.push(params)

  if (!children) return

  const handler = useNewHandler()
  const schema: SchemaObject = {}

  params.schema = schema as any

  const rules: EndpointRule[] = getOrAdd(endpoint, `rules.${inMap[props.in]}`, [{}, []])

  handler[schemaContext.key] = { schema } satisfies SchemaContext
  handler[paramContext.key] = { props, rules }

  innet(children, handler)
}