import { useApp } from 'innet'
import { JSXElement } from '@innet/jsx'

import { useSchema } from '../useSchema'

export function useSchemaBase () {
  let schema = useSchema()

  if (!schema) {
    const { type } = useApp<JSXElement>()
    throw Error(`Use <${type}> inside <response>`)
  }

  if (schema.oneOf) {
    const parent = schema
    schema = {}
    parent.oneOf.push(schema)
  } else if (schema.type) {
    const parent = schema
    const oldSchema = { ...parent }
    schema = {}

    for (const key in parent) {
      delete parent[key]
    }

    parent.oneOf = [oldSchema, schema]
  }

  return schema
}
