import { useApi } from '../useApi'
import { useNewSchema } from '../useNewSchema'

import { ObjectType, RefSchemaObject, SchemaObject, ValuesSchemaProps } from '../../types'

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

export function useSchemaType <T extends ObjectType> (
  type: T,
  { values, ref, example, examples, ...options }: undefined | ValuesSchemaProps<TypeMap<T>> = {},
): SchemaObject {
  if (ref) {
    const { docs } = useApi()

    if (!docs.components.schemas) {
      docs.components.schemas = {}
    }

    useNewSchema({
      $ref: `#/components/schemas/${ref}`,
    })

    if (docs.components.schemas?.[ref]) {
      return
    }

    return (docs.components.schemas[ref] = {
      ...options,
      example,
      examples,
      type,
      enum: values,
    } as any)
  }

  return useNewSchema({
    ...options,
    example,
    examples,
    enum: values,
    type: type as any,
  })
}
