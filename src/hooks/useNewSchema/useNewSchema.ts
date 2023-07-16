import { useSchemaContext } from '../useSchemaContext'
import { useThrow } from '../useThrow'

import { ReferenceObject, SchemaObject } from '../../types'

export function useNewSchema <T extends SchemaObject | ReferenceObject> (schema: T = {} as T): T {
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
      delete parentSchema[key]
    }

    parentSchema.oneOf = [oldSchema, schema]
  }

  return schema
}
