import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'
import { v4 } from 'uuid'

import { bodyContext, useRule, useSchemaType } from '../../../hooks'
import { type SchemaProps } from '../../../types'
import { defaultTo, getArrayValues, nullable, oneOf, optional, pipe, type Rule, uuidTo, values } from '../../../utils'

export type UuidProps = SchemaProps<string, 'new' | string>

export const uuid: HandlerPlugin = () => {
  const {
    default: defaultValue,
    ...props
  } = useProps<UuidProps>()
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  const params: SchemaProps<string> = {
    ...props,
  }

  if (defaultValue !== 'new') {
    params.default = defaultValue
  }

  const schema = useSchemaType('string', params)
  // @ts-expect-error: FIXME
  schema.format = 'uuid'

  if (defaultValue === 'new') {
    // @ts-expect-error: FIXME
    schema['x-default'] = defaultValue
  }

  if (!hasRules) return

  const rules: Rule[] = []

  if (defaultValue !== undefined) {
    rules.push(defaultTo(defaultValue === 'new' ? v4 : defaultValue))
  }

  rules.push(uuidTo)

  if (props.values) {
    rules.push(values(getArrayValues(props.values)))
  }

  const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules)

  if (defaultValue === undefined) {
    useRule(optional(rule))
  } else {
    useRule(rule)
  }
}
