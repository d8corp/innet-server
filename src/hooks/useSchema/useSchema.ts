import { Context, useContext } from '@innet/jsx'

import { SchemaObject } from '../../types'

export const schemaContext = new Context<SchemaObject>()

export function useSchema () {
  return useContext(schemaContext)
}
