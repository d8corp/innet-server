import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  formatterContext,
  objectFormatterContext,
  objectValidatorContext,
  type SchemaContext,
  schemaContext,
  useSchemaContext,
  useSetObjectFormatter,
  useSetObjectValidator,
  validatorContext,
} from '../../../hooks'
import { type SchemaObject } from '../../../types'

export interface FieldProps {
  key: string
  optional?: boolean
}

export const field: HandlerPlugin = () => {
  const handler = useNewHandler()
  const setObjectFormatter = useSetObjectFormatter()
  const setObjectValidator = useSetObjectValidator()
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
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.properties[key] = fieldSchema

  if (!optional) {
    if (!schema.required) {
      schema.required = []
    }

    schema.required.push(key)
  }

  formatterContext.set(handler, formatter => {
    setObjectFormatter({ [key]: formatter })
  })

  validatorContext.set(handler, validator => {
    setObjectValidator({ [key]: validator })
  })

  objectFormatterContext.set(handler, null)
  objectValidatorContext.set(handler, null)

  innet(children, handler)
}
