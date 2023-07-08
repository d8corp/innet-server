import { HandlerPlugin } from 'innet'
import { maxLength, minLength, Validator } from '@cantinc/utils'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'

export interface StringProps extends SchemaValuesTypeOptions <string>{
  min?: number
  max?: number
}

export const string: HandlerPlugin = () => {
  const { min, max, ...props } = useProps<StringProps>() || {}
  const schema = useSchemaType('string', props)

  schema.minimum = min
  schema.maximum = max

  const validator: Validator<any, any>[] = []

  if (min !== undefined) {
    validator.push(minLength(min))
  }

  if (max !== undefined) {
    validator.push(maxLength(max))
  }

  usePatchRules({
    validator,
  })
}
