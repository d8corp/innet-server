import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useSchema } from '../../hooks'

export interface NumberProps {
  default?: number
}

export const number: HandlerPlugin = () => {
  const props = useProps<NumberProps>()
  const schema = useSchema()

  if (!schema) {
    throw Error('Use <number> inside <response>')
  }

  schema.type = 'number'

  if (props?.default) {
    schema.default = props.default
  }
}
