import { HandlerPlugin } from 'innet'
import { Validator } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../../hooks'
import { IntegerFormats, SchemaValuesTypeOptions } from '../../../types'
import { isInteger, maximum, minimum } from '../../../utils'

export interface IntegerProps extends SchemaValuesTypeOptions<number> {
  format?: IntegerFormats
  min?: number
  max?: number
}

export const integer: HandlerPlugin = () => {
  const { format = 'int32', min, max, ...props } = useProps<IntegerProps>() || {}
  const schema = useSchemaType('integer', props)

  schema.format = format
  schema.minimum = min
  schema.maximum = max

  const validator: Validator<any, any>[] = [isInteger(format)]

  if (min !== undefined) {
    validator.push(minimum(min))
  }

  if (max !== undefined) {
    validator.push(maximum(max))
  }

  usePatchRules({
    formatter: [format === 'int32' ? Number : BigInt],
    validator,
  })
}
