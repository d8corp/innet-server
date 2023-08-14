import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  formatterContext,
  paramContext,
  schemaContext,
  useEndpoint,
  validatorContext,
} from '../../../hooks'
import {
  type EndpointRule,
  type EndpointRules,
  type InParam,
  type ParameterObject,
  type SchemaObject,
} from '../../../types'
import {
  getOrAdd,
  isObject,
  isOptional,
  isRequired,
  objectFormatter,
  type ObjectFormatterMap,
  type ObjectValidatorMap,
  optionalFormatter,
} from '../../../utils'

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

  schemaContext.set(handler, schema)

  const rules: EndpointRule<any, any, any>[] = getOrAdd(endpoint, `rules.${inMap[props.in]}`, [{}, []])
  const rulesMaps: [ObjectFormatterMap, ObjectValidatorMap][] = getOrAdd(endpoint, `rulesMaps.${inMap[props.in]}`, [{}, []])
  let formatterIndex = 0
  let validatorIndex = 0

  paramContext.set(handler, { props })

  formatterContext.set(handler, formatter => {
    const rule = getOrAdd(rules, formatterIndex, [[]])
    const ruleMaps = getOrAdd(rulesMaps, formatterIndex, [[]])

    if (!rule[0]) {
      ruleMaps[0] = { [props.name]: params.required ? optionalFormatter(formatter) : formatter }
      rule[0] = objectFormatter(ruleMaps[0])
    } else {
      ruleMaps[0][props.name] = params.required ? optionalFormatter(formatter) : formatter
    }

    formatterIndex++
  })

  validatorContext.set(handler, validator => {
    const rule = getOrAdd(rules, validatorIndex, [[]])
    const ruleMaps = getOrAdd(rulesMaps, validatorIndex, [[]])

    if (params.required) {
      validator = isRequired(validator)
    } else {
      validator = isOptional(validator)
    }

    if (!rule[1]) {
      ruleMaps[1] = { [props.name]: validator }
      rule[1] = isObject(ruleMaps[1])
    } else {
      ruleMaps[1][props.name] = validator
    }

    validatorIndex++
  })

  innet(children, handler)
}
