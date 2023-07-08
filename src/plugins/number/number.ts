import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../hooks'
import { SchemaValuesTypeOptions } from '../../types'
import { isNumber, maximum, minimum } from '../../utils'

export interface NumberProps extends SchemaValuesTypeOptions <number>{
  minimum?: number
  maximum?: number
}

export const number: HandlerPlugin = () => {
  const props = useProps<NumberProps>()

  useSchemaType('number', props)

  usePatchRules({
    formatter: formatters => formatters.push(Number),
    validator: validators => {
      validators.push(isNumber)

      if (props?.minimum) {
        validators.push(minimum(props.minimum))
      }

      if (props?.maximum) {
        validators.push(maximum(props.maximum))
      }
    },
  })
}
