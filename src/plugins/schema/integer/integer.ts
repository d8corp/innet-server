import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { type IntegerFormats, type ValuesSchemaProps } from '../../../types'
import {
  defaultTo,
  int,
  max as maximum,
  min as minimum,
  optional,
  pipe,
  type Rule,
  values as valuesOf,
} from '../../../utils'

export interface IntegerProps extends ValuesSchemaProps<number | bigint> {
  format?: IntegerFormats
  min?: number | bigint
  max?: number | bigint
}

export const integer: HandlerPlugin = () => {
  const {
    format = 'int32',
    min,
    max,
    values,
    example,
    examples,
    default: defaultValue,
    ...props
  } = useProps<IntegerProps>() || {}
  const schema = useSchemaType('integer', {
    ...props,
    default: defaultValue !== undefined ? Number(defaultValue) : undefined,
    example: example !== undefined ? Number(example) : undefined,
    examples: examples?.map(Number),
    values: values?.map(Number),
  })
  // @ts-expect-error: FIXME
  schema.format = format
  // @ts-expect-error: FIXME
  schema.minimum = min !== undefined ? Number(min) : undefined
  // @ts-expect-error: FIXME
  schema.maximum = max !== undefined ? Number(max) : undefined

  const rules: Rule[] = []

  if (defaultValue !== undefined) {
    rules.push(defaultTo(defaultValue))
  }

  rules.push(int(format))

  if (values) {
    rules.push(valuesOf(values.map(value => int(format)(value))))
  }

  if (min !== undefined) {
    rules.push(minimum(min))
  }

  if (max !== undefined) {
    rules.push(maximum(max))
  }

  if (defaultValue === undefined) {
    useRule(optional(pipe(...rules)))
  } else {
    useRule(pipe(...rules))
  }
}
