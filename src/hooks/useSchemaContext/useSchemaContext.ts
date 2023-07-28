import { Context, useContext } from '@innet/jsx'

import { type SchemaObject } from '../../types'

export type SchemaContext = SchemaObject | SchemaObject[]

export const schemaContext = new Context<SchemaContext>()

export function useSchemaContext () {
  return useContext(schemaContext)
}
