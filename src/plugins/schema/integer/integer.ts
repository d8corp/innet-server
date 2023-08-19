import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { type IntegerFormats, type ValuesSchemaProps } from '../../../types'
import { defaultTo, int, max as maximum, min as minimum, pipe, type Rule } from '../../../utils'

type GetType<F extends IntegerFormats> = F extends 'int32' ? number : bigint

export interface IntegerProps<F extends IntegerFormats = IntegerFormats> extends ValuesSchemaProps<GetType<F>> {
  format?: F
  min?: GetType<F>
  max?: GetType<F>
}

export const integer: HandlerPlugin = <F extends IntegerFormats>() => {
  const {
    format = 'int32' as F,
    min,
    max,
    values,
    example,
    examples,
    default: defaultValue,
    ...props
  } = useProps<IntegerProps<F>>() || {}
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

  if (min !== undefined) {
    rules.push(minimum(min))
  }

  if (max !== undefined) {
    rules.push(maximum(max))
  }

  useRule(pipe(...rules))
}
