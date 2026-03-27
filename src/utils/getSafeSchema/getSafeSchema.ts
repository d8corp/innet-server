import { type SchemaObject } from '../../types'

export function getSafeSchema (schema: SchemaObject): SchemaObject {
  return 'oneOf' in schema ? schema.oneOf![0] : schema
}
