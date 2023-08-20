import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useContext, useProps } from '@innet/jsx'

import {
  ruleContext,
  type SchemaContext,
  schemaContext,
  useBlock,
  useSchemaType,
} from '../../../hooks'
import { type ArraySchemaObject, type BaseSchemaProps, type SchemaObject } from '../../../types'
import { arrayOf } from '../../../utils'

export interface ArrayProps extends BaseSchemaProps <any[]> {

}

export const array: HandlerPlugin = () => {
  useBlock('path')

  const setRule = useContext(ruleContext)
  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<ArrayProps>()) as ArraySchemaObject
  const children = useChildren()

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.items = fieldSchema

  if (setRule) {
    ruleContext.set(handler, rule => setRule(arrayOf(rule)))
  }

  innet(children, handler)
}
