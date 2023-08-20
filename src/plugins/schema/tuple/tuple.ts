import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  ruleContext,
  type SchemaContext,
  schemaContext,
  useBlock,
  useRule,
  useSchemaType,
} from '../../../hooks'
import {
  type ArraySchemaObject,
  type BaseSchemaProps,
  type SchemaObject,
} from '../../../types'
import { type Rule, tupleOf } from '../../../utils'

export interface TupleProps extends BaseSchemaProps <any[]> {

}

export const tuple: HandlerPlugin = () => {
  useBlock('path')

  const handler = useNewHandler()
  const schema = useSchemaType('array', useProps<TupleProps>()) as ArraySchemaObject
  const children = useChildren()

  if (schema) {
    const schemas: SchemaObject[] = []
    handler[schemaContext.key] = schemas satisfies SchemaContext

    // @ts-expect-error: FIXME
    schema.prefixItems = schemas

    const rulesMap: Rule[] = []

    useRule(tupleOf(rulesMap))

    ruleContext.set(handler, rule => {
      rulesMap.push(rule)
    })

    innet(children, handler)
  }
}
