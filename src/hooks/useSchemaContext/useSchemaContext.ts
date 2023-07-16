import { Context, useContext } from '@innet/jsx'

import { SchemaObject } from '../../types'

export type SchemaContext = SchemaObject | SchemaObject[]

export const schemaContext = new Context<SchemaContext>()

export function useSchemaContext () {
  return useContext(schemaContext)
}
