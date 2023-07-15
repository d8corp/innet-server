import { useApp } from 'innet'
import { JSXElement } from '@innet/jsx'

import { useSchema } from '../useSchema'

export function useSchemaBase () {
  const schemaContext = useSchema()

  if (!schemaContext) {
    const { type } = useApp<JSXElement>()
    throw Error(`Use <${type}> inside one of <response>, <param>, <body>`)
  }

  let { schema, schemas } = schemaContext

  if (!schema) {
    if (schemas) {
      schema = {}
      schemas.push(schema)
    }
  } else if (schema.oneOf) {
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
