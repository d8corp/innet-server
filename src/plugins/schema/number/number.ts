import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useFormatter, useSchemaType, useValidator } from '../../../hooks'
import { type Validator, type ValuesSchemaProps } from '../../../types'
import { isEach, isNumber, maximum, minimum } from '../../../utils'

export interface NumberProps extends ValuesSchemaProps <number> {
  /** Validate the number value by minimum. */
  min?: number

  /** Validate the number value by maximum. */
  max?: number
}

export const number: HandlerPlugin = () => {
  const { min, max, ...props } = useProps<NumberProps>() || {}

  const schema = useSchemaType('number', props)
  // @ts-expect-error: FIXME
  schema.minimum = min
  // @ts-expect-error: FIXME
  schema.maximum = max

  const validator: Validator<any, any>[] = [isNumber]

  if (min !== undefined) {
    validator.push(minimum(min))
  }

  if (max !== undefined) {
    validator.push(maximum(max))
  }

  useFormatter(Number)
  useValidator(isEach(validator))
}
