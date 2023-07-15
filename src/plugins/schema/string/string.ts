import { HandlerPlugin } from 'innet'
import { maxLength, minLength, reg, Validator } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { useRules, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'

export interface StringProps extends SchemaValuesTypeOptions <string>{
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
    schema.minimum = min
    validator.push(minLength(min))
  }

  if (max !== undefined) {
    schema.maximum = max
    validator.push(maxLength(max))
  }

  if (pattern !== undefined) {
    schema.pattern = String(pattern)
    validator.push(reg(typeof pattern === 'string' ? new RegExp(pattern) : pattern, patternID))
  }

  useRules({
    formatter: [String],
    validator,
  })
}
