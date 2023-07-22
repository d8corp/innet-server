import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useBlockPatch, useNewSchema, useSchemaType } from '../../../hooks'
import { BaseSchemaProps } from '../../../types'

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
