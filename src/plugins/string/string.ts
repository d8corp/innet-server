import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface StringProps extends SchemaTypeOptions <string>{
  values?: string[]
}

export const string: HandlerPlugin = () => {
  const { values, ...props } = useProps<StringProps>() || {}
  const schema = useSchemaType('string', props)

  if (values) {
    schema.enum = values
  }
}
