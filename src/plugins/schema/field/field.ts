import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useProps } from '@innet/jsx'

import { objectRuleContext, ruleContext, schemaContext, useObjectRule, useObjectSchemaContext } from '../../../hooks'
import { type SchemaObject } from '../../../types'
import { getSafeSchema, required } from '../../../utils'

export interface FieldProps {
  children?: any
  deprecated?: boolean
  key: string
  optional?: boolean
  readOnly?: boolean
  writeOnly?: boolean
}

export const field: HandlerPlugin = () => {
  const handler = useNewHandler()
  const {
    children,
    deprecated,
    key,
    optional,
    readOnly,
    writeOnly,
  } = useProps<FieldProps>()
  const schema = getSafeSchema(useObjectSchemaContext())

  if (!schema.properties) {
    schema.properties = {}
  }

  if (schema.properties[key]) {
    throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`)
  }

  const fieldSchema: SchemaObject = {}
  schemaContext.set(handler, fieldSchema)

  if (deprecated) {
    fieldSchema.deprecated = true
  }

  if (readOnly) {
    fieldSchema.readOnly = true
  }

  if (writeOnly) {
    fieldSchema.writeOnly = true
  }

  schema.properties[key] = fieldSchema

  if (!optional) {
    if (!schema.required) {
      schema.required = []
    }

    schema.required.push(key)
  }

  const map = useObjectRule()
  ruleContext.set(handler, rule => {
    if (optional) {
      map[key] = rule
    } else {
      map[key] = required(rule)
    }
  })

  objectRuleContext.set(handler, null)

  innet(children, handler)
}
