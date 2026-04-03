import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { v4 } from 'uuid'

import { useRule, useSchemaType } from '../../../hooks'
import { type SchemaProps } from '../../../types'
import { defaultTo, getArrayValues, optional, pipe, type Rule, uuidTo, values } from '../../../utils'

export type UuidProps = SchemaProps<string, 'new' | string>

export const uuid: HandlerPlugin = () => {
  const {
    default: defaultValue,
    ...props
  } = useProps<UuidProps>()

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

  const rules: Rule[] = []

  if (defaultValue !== undefined) {
    rules.push(defaultTo(defaultValue === 'new' ? v4 : defaultValue))
  }

  rules.push(uuidTo)

  if (props.values) {
    rules.push(values(getArrayValues(props.values)))
  }

  if (defaultValue === undefined) {
    useRule(optional(pipe(...rules)))
  } else {
    useRule(pipe(...rules))
  }
}
