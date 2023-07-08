import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'
import { isNumber, maximum, minimum } from '../../../utils'

export interface NumberProps extends SchemaValuesTypeOptions <number>{
  min?: number
  max?: number
}

export const number: HandlerPlugin = () => {
  const { min, max, ...props } = useProps<NumberProps>() || {}

  const schema = useSchemaType('number', props)
  schema.minimum = min
  schema.maximum = max

  usePatchRules({
    formatter: formatters => formatters.push(Number),
    validator: validators => {
      validators.push(isNumber)

      if (min !== undefined) {
        validators.push(minimum(min))
      }

      if (max !== undefined) {
        validators.push(maximum(max))
      }
    },
  })
}
