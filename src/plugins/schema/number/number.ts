import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { type ValuesSchemaProps } from '../../../types'
import { max as maximum, min as minimum, num, pipe, type Rule } from '../../../utils'

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

  const rules: Rule[] = [num]

  if (min !== undefined) {
    rules.push(minimum(min))
  }

  if (max !== undefined) {
    rules.push(maximum(max))
  }

  useRule(pipe(...rules))
}
