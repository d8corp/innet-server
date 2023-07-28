import { type HandlerPlugin } from 'innet'
import { maxLength, minLength, reg, type Validator } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { useRulesPlugin, useSchemaType } from '../../../hooks'
import { type ValuesSchemaProps } from '../../../types'

export interface StringProps extends ValuesSchemaProps <string> {
  min?: number
  max?: number
  pattern?: string | RegExp
  patternID?: string
}

export const string: HandlerPlugin = () => {
  const {
    min,
    max,
    pattern,
    patternID,
    ...props
  } = useProps<StringProps>() || {}
  const schema = useSchemaType('string', props)
  const validator: Validator<any, any>[] = []

  if (min !== undefined) {
    // @ts-expect-error: FIXME
    schema.minimum = min
    validator.push(minLength(min))
  }

  if (max !== undefined) {
    // @ts-expect-error: FIXME
    schema.maximum = max
    validator.push(maxLength(max))
  }

  if (pattern !== undefined) {
    // @ts-expect-error: FIXME
    schema.pattern = String(pattern)
    validator.push(reg(typeof pattern === 'string' ? new RegExp(pattern) : pattern, patternID))
  }

  useRulesPlugin({
    defaultValue: props.default,
    formatter: [String],
    validator,
  })
}
