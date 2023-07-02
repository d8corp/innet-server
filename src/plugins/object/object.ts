import innet, { HandlerPlugin, useHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { useSchemaType } from '../../hooks'
import { SchemaTypeOptions } from '../../types'

export interface ObjectProps extends SchemaTypeOptions <object> {
  ref?: string
}

export const object: HandlerPlugin = () => {
  const handler = useHandler()
  const { ref, ...props } = useProps<ObjectProps>() || {}
  const children = useChildren()

  useSchemaType('object', props)

  innet(children, handler)
}
