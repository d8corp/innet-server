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
    nullable,
    ref,
    value,
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
      const: value,
      enum: values,
      example,
      examples,
      type: type === 'any' ? undefined : nullable ? [type, 'null'] : type,
    } as any)
  }

  const arrayValues = values ? Array.isArray(values) ? values : Object.keys(values) : values
  const enumDescription = values && !Array.isArray(values)
    ? {
        [process.env.INNET_API_ENUM_DESCRIPTION_KEY || 'x-enumNames']: values,
      }
    : {}

  return useNewSchema({
    ...options,
    ...enumDescription,
    const: value,
    enum: arrayValues,
    example,
    examples,
    type: type === 'any' ? undefined : nullable ? [type, 'null'] : type as any,
  })
}
