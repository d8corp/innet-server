import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useProps } from '@innet/jsx'

import {
  ruleContext,
  type SchemaContext,
  schemaContext,
  useBlock,
  useEffect,
  useRule,
  useSchemaType,
} from '../../../hooks'
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule'
import { type ArraySchemaObject, type BaseSchemaProps, type SchemaObject } from '../../../types'
import { defaultTo, pipe, required, type Rule, tupleOf } from '../../../utils'

export interface TupleProps extends BaseSchemaProps <any[]> {
  children?: any
}

export const tuple: HandlerPlugin = () => {
  useBlock('path')

  const handler = useNewHandler()
  const {
    children,
    ...props
  } = useProps<TupleProps>()
  const schema = useSchemaType('array', props) as ArraySchemaObject

  if (schema) {
    const schemas: SchemaObject[] = []
    handler[schemaContext.key] = schemas satisfies SchemaContext

    // @ts-expect-error: FIXME
    schema.prefixItems = schemas

    const rulesMap: Rule[] = []
    const rules: Rule[] = []

    if (props.default !== undefined) {
      rules.push(defaultTo(props.default))
    }

    if (props.default !== undefined) {
      rules.push(tupleOf(rulesMap))
    } else {
      const parentRule = useParentRule()
      rules.push(parentRule(tupleOf(rulesMap)))
    }

    useRule(pipe(...rules))

    parentRuleContext.set(handler, rule => required(rule))
    ruleContext.set(handler, rule => {
      rulesMap.push(rule)
    })

    innet(children, handler)

    useEffect(() => {
      if (!rulesMap.length) {
        throw Error('<tuple> MUST have content')
      }
    })
  }
}
