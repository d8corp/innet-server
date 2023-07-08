import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../hooks'
import { IntegerFormats, SchemaValuesTypeOptions } from '../../types'
import { isInteger } from '../../utils'

export interface IntegerProps extends SchemaValuesTypeOptions<number> {
  format?: IntegerFormats
}

export const integer: HandlerPlugin = () => {
  const { format = 'int32', ...props } = useProps<IntegerProps>() || {}
  const schema = useSchemaType('integer', props)

  schema.format = format

  usePatchRules({
    formatter: formatters => formatters.push(format === 'int32' ? Number : BigInt),
    validator: validators => validators.push(isInteger(format)),
  })
}
