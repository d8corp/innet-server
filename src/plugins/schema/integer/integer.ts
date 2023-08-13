import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useFormatter, useSchemaType, useValidator } from '../../../hooks'
import { type IntegerFormats, type Validator, type ValuesSchemaProps } from '../../../types'
import { defaultFormatter, isEach, isInteger, maximum, minimum } from '../../../utils'

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

  const validator: Validator<any, any>[] = [isInteger(format)]

  if (min !== undefined) {
    validator.push(minimum(min))
  }

  if (max !== undefined) {
    validator.push(maximum(max))
  }

  useFormatter(defaultFormatter(defaultValue, format === 'int32' ? Number : BigInt))
  useValidator(isEach(validator))
}
