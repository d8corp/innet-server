import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { type SchemaContext, schemaContext, useBlockPatch, useSchemaType } from '../../../hooks'
import { type ArraySchemaObject, type BaseSchemaProps, type SchemaObject } from '../../../types'

export interface TupleProps extends BaseSchemaProps <any[]> {

}

export const tuple: HandlerPlugin = () => {
  useBlockPatch()

  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<TupleProps>()) as ArraySchemaObject
  const children = useChildren()

  const schemas: SchemaObject[] = []
  handler[schemaContext.key] = schemas satisfies SchemaContext

  // @ts-expect-error: FIXME
  schema.prefixItems = schemas

  innet(children, handler)
}
