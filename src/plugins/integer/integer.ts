import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchema } from '../../hooks'
import { IntegerFormats } from '../../types'

export interface IntegerProps {
  default?: number
  format?: IntegerFormats
}

export const integer: HandlerPlugin = () => {
  const props = useProps<IntegerProps>()
  const schema = useSchema()

  if (!schema) {
    throw Error('Use <integer> inside <response>')
  }

  if (schema.type) {
    throw Error('Already typed')
  }

  schema.type = 'integer'
  schema.format = props?.format ?? 'int64'

  if (props?.default) {
    schema.default = props.default
  }
}
