import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { SchemaContext, schemaContext, useBlockPatch, useSchemaType } from '../../../hooks'
import { ArraySchemaObject, BaseSchemaProps, SchemaObject } from '../../../types'

export interface TupleProps extends BaseSchemaProps <any[]>{

}

export const tuple: HandlerPlugin = () => {
  useBlockPatch()

  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<TupleProps>()) as ArraySchemaObject
  const children = useChildren()

  const schemas: SchemaObject[] = []
  handler[schemaContext.key] = schemas satisfies SchemaContext

  // @ts-ignore
  schema.prefixItems = schemas

  innet(children, handler)
}
