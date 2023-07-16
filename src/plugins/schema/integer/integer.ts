import { HandlerPlugin } from 'innet'
import { Validator } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { useRules, useSchemaType } from '../../../hooks'
import { IntegerFormats, SchemaValuesTypeOptions } from '../../../types'
import { isInteger, maximum, minimum } from '../../../utils'

type GetType<F extends IntegerFormats> = F extends 'int32' ? number : BigInt

export interface IntegerProps<F extends IntegerFormats = IntegerFormats> extends SchemaValuesTypeOptions<GetType<F>> {
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
    default: defaultValue,
    ...props
  } = useProps<IntegerProps<F>>() || {}
  const schema = useSchemaType('integer', {
    ...props,
    default: defaultValue !== undefined ? Number(defaultValue) : undefined,
    example: example !== undefined ? Number(example) : undefined,
    values: values?.map(Number),
  })

  schema.format = format
  schema.minimum = min !== undefined ? Number(min) : undefined
  schema.maximum = max !== undefined ? Number(max) : undefined

  const validator: Validator<any, any>[] = [isInteger(format)]

  if (min !== undefined) {
    validator.push(minimum(min))
  }

  if (max !== undefined) {
    validator.push(maximum(max))
  }

  useRules<GetType<F>, any, any>({
    formatter: [format === 'int32' ? Number : BigInt as any],
    validator,
    defaultValue,
  })
}
