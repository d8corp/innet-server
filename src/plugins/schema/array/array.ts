import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useBlockPatch, useSchemaType } from '../../../hooks'
import { ArraySchemaObject, BaseSchemaProps, SchemaObject } from '../../../types'

export interface ArrayProps extends BaseSchemaProps <any[]>{

}

export const array: HandlerPlugin = () => {
  useBlockPatch()

  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<ArrayProps>()) as ArraySchemaObject
  const children = useChildren()

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.items = fieldSchema

  innet(children, handler)
}
