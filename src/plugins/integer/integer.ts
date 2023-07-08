import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../hooks'
import { IntegerFormats, SchemaValuesTypeOptions } from '../../types'
import { isInteger, maximum, minimum } from '../../utils'

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

  usePatchRules({
    formatter: formatters => formatters.push(format === 'int32' ? Number : BigInt),
    validator: validators => {
      validators.push(isInteger(format))

      if (min !== undefined) {
        validators.push(minimum(min))
      }

      if (max !== undefined) {
        validators.push(maximum(max))
      }
    },
  })
}
