import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { IntegerFormats, SchemaTypeOptions } from '../../types'

export interface IntegerProps extends SchemaTypeOptions<number> {
  format?: IntegerFormats
}

export const integer: HandlerPlugin = () => {
  const { format = 'int64', ...props } = useProps<IntegerProps>() || {}
  const schema = useSchemaType('integer', props)

  schema.format = format
}
