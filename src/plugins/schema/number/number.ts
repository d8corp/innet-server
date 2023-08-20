import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type ValuesSchemaProps } from '../../../types'
import { defaultTo, max as maximum, min as minimum, num, pipe, type Rule, values } from '../../../utils'

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

  const rules: Rule[] = []

  if (props.default !== undefined) {
    rules.push(defaultTo(props.default))
  }

  rules.push(num)

  if (props.values) {
    rules.push(values(props.values))
  }

  if (min !== undefined) {
    rules.push(minimum(min))
  }

  if (max !== undefined) {
    rules.push(maximum(max))
  }

  if (props.default === undefined) {
    const rootRule = useParentRule()
    useRule(rootRule(pipe(...rules)))
  } else {
    useRule(pipe(...rules))
  }
}
