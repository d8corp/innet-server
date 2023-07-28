import { useSchemaContext } from '../useSchemaContext'
import { useThrow } from '../useThrow'

import { type RefSchemaObject, type SchemaObject } from '../../types'

export function useNewSchema <T extends RefSchemaObject = SchemaObject> (schema: T = Object.create(null) as T): T {
  const parentSchema = useSchemaContext()

  if (!parentSchema) {
    useThrow('Use <{type}> inside one of <response>, <param> or <body>')
  }

  if (Array.isArray(parentSchema)) {
    parentSchema.push(schema)
  } else if (parentSchema.oneOf) {
    parentSchema.oneOf.push(schema)
  } else if (parentSchema.type) {
    const oldSchema = { ...parentSchema }

    for (const key in parentSchema) {
      // @ts-expect-error: FIXME
      delete parentSchema[key]
    }

    parentSchema.oneOf = [oldSchema, schema]
  } else {
    Object.assign(parentSchema, schema)
    return parentSchema as T
  }

  return schema
}
