import { useApp } from 'innet'
import { JSXElement } from '@innet/jsx'

import { useSchema } from '../useSchema'

import { ObjectType, SchemaTypeOptions } from '../../types'

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

export function useSchemaType <T extends ObjectType> (type: T, options?: SchemaTypeOptions<TypeMap<T>>) {
  const schema = useSchema()

  if (!schema) {
    const { type } = useApp<JSXElement>()
    throw Error(`Use <${type}> inside <response>`)
  }

  if (schema.type) {
    throw Error('Already typed')
  }

  schema.type = type

  if (options) {
    Object.assign(schema, options)
  }

  return schema
}
