import { useApi } from '../useApi'
import { useNewSchema } from '../useNewSchema'

import { type ObjectType, type SchemaObject, type ValuesSchemaProps } from '../../types'

export type SchemaType = 'any' | ObjectType

type TypeMap <T extends SchemaType> = T extends 'integer' | 'number'
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
            : T extends 'any'
              ? any
              : unknown

export function useSchemaType <T extends SchemaType> (
  type: T,
  {
    example,
    examples,
    ref,
    values,
    ...options
  }: ValuesSchemaProps<TypeMap<T>> | undefined = {},
): SchemaObject | undefined {
  if (ref) {
    const { docs } = useApi()

    if (!docs.components) {
      docs.components = {}
    }

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
      enum: values,
      example,
      examples,
      type: type === 'any' ? undefined : type,
    } as any)
  }

  return useNewSchema({
    ...options,
    enum: values,
    example,
    examples,
    type: type === 'any' ? undefined : type as any,
  })
}
