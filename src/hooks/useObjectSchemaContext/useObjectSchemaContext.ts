import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type SchemaObject } from '../../types'

export const objectSchemaContext = new Context<SchemaObject>()

export function useObjectSchemaContext () {
  const schema = useContext(objectSchemaContext)

  if (!schema) {
    useThrow('Use <{type}> in <object>')
  }

  return schema
}
