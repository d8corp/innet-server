import { HandlerPlugin } from 'innet'
import { Validator } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { useRulesPlugin, useSchemaType } from '../../../hooks'
import { ValuesSchemaProps } from '../../../types'
import { isNumber, maximum, minimum } from '../../../utils'

export interface NumberProps extends ValuesSchemaProps <number>{
  /** Validate the number value by minimum. */
  min?: number

  /** Validate the number value by maximum. */
  max?: number
}

export const number: HandlerPlugin = () => {
  const { min, max, ...props } = useProps<NumberProps>() || {}

  const schema = useSchemaType('number', props)
  schema.minimum = min
  schema.maximum = max

  const validator: Validator<any, any>[] = [isNumber]

  if (min !== undefined) {
    validator.push(minimum(min))
  }

  if (max !== undefined) {
    validator.push(maximum(max))
  }

  useRulesPlugin({
    formatter: [Number],
    validator,
  })
}
