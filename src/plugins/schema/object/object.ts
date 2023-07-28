import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { type SchemaContext, schemaContext, useBlockPatch, useSchemaType } from '../../../hooks'
import { type BaseSchemaProps } from '../../../types'

export interface ObjectProps extends BaseSchemaProps <object> {

}

export const object: HandlerPlugin = () => {
  useBlockPatch()

  const children = useChildren()
  const props = useProps<ObjectProps>() || {}

  const schema = useSchemaType('object', props)

  if (schema) {
    const handler = useNewHandler()
    handler[schemaContext.key] = schema satisfies SchemaContext

    innet(children, handler)
  }
}
