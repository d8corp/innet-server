import { useSchemaBase } from '../useSchemaBase'

import { ObjectType, SchemaValuesTypeOptions } from '../../types'

type TypeMap <T extends ObjectType> = T extends 'number' | 'integer'
  ? number
  : T extends 'string'
    ? string
    : T extends 'object'
      ? object
      : T extends 'array'
        ? any[]
        : T extends 'boolean'
          ? boolean
          : T extends 'null'
            ? null
            : unknown

export function useSchemaType <T extends ObjectType> (type: T, { values, ...options }: SchemaValuesTypeOptions<TypeMap<T>> = {}) {
  const schema = useSchemaBase()

  schema.type = type

  Object.assign(schema, options)

  if (values) {
    schema.enum = values
  }

  return schema
}
