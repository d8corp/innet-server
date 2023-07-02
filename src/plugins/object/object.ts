import innet, { HandlerPlugin, useHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { useSchema } from '../../hooks'

export interface ObjectProps {
  ref?: string
}

export const object: HandlerPlugin = () => {
  const handler = useHandler()
  const props = useProps<ObjectProps>()
  const schema = useSchema()
  const children = useChildren()

  if (!schema) {
    throw Error('Use <object> inside <response>')
  }

  schema.type = 'object'

  innet(children, handler)
}
