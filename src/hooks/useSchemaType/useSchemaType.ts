import { useNewSchema } from '../useNewSchema'

import { ObjectType, SchemaObject, ValuesSchemaProps } from '../../types'

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

export function useSchemaType <T extends ObjectType> (type: T, { values, ...options }: ValuesSchemaProps<TypeMap<T>> = {}) {
  const schema = useNewSchema<SchemaObject>()

  schema.type = type

  Object.assign(schema, options)

  if (values) {
    schema.enum = values
  }

  return schema
}
