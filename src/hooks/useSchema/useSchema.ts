import { Context, useContext } from '@innet/jsx'

import { SchemaObject } from '../../types'

export interface SchemaContext {
  schema?: SchemaObject
  schemas?: SchemaObject[]
}

export const schemaContext = new Context<SchemaContext>()

export function useSchema () {
  return useContext(schemaContext)
}
