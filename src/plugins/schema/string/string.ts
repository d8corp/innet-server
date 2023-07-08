import { HandlerPlugin } from 'innet'
import { maxLength, minLength } from '@cantinc/utils'
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

  usePatchRules({
    validator: validators => {
      if (min !== undefined) {
        validators.push(minLength(min))
      }

      if (max !== undefined) {
        validators.push(maxLength(max))
      }
    },
  })
}
