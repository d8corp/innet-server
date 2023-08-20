import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  objectRuleContext,
  ruleContext,
  schemaContext, useObjectRule,
  useSchemaContext,
} from '../../../hooks'
import { type SchemaObject } from '../../../types'
import { required } from '../../../utils'

export interface FieldProps {
  key: string
  optional?: boolean
}

export const field: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { key, optional } = useProps<FieldProps>()
  const schema = useSchemaContext()
  const children = useChildren()

  if (Array.isArray(schema) || schema?.type !== 'object') {
    throw Error('Use <field> inside <object>')
  }

  if (!schema.properties) {
    schema.properties = {}
  }

  if (schema.properties[key]) {
    throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`)
  }

  const fieldSchema: SchemaObject = {}
  schemaContext.set(handler, fieldSchema)

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
