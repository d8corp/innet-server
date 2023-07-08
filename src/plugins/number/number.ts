import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../hooks'
import { SchemaValuesTypeOptions } from '../../types'
import { isNumber } from '../../utils'

export interface NumberProps extends SchemaValuesTypeOptions <number>{

}

export const number: HandlerPlugin = () => {
  useSchemaType('number', useProps<NumberProps>())
  usePatchRules({
    formatter: formatters => formatters.push(Number),
    validator: validators => validators.push(isNumber),
  })
}
