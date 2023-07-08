import innet, { HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { schemaContext, useSchema } from '../../../hooks'
import { SchemaObject } from '../../../types'

export interface FieldProps {
  key: string
  optional?: boolean
}

export const field: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { key, optional } = useProps<FieldProps>()
  const schema = useSchema()
  const children = useChildren()

  if (schema?.type !== 'object') {
    throw Error('Use <field> inside <object>')
  }

  if (!schema.properties) {
    schema.properties = {}
  }

  if (schema.properties[key]) {
    throw Error(`Don't use <field> in an <object> with the same property of key: ${key}`)
  }

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema

  schema.properties[key] = fieldSchema

  if (!optional) {
    if (!schema.required) {
      schema.required = []
    }

    schema.required.push(key)
  }

  innet(children, handler)
}
