import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import {
  bodyContext,
  ruleContext,
  type SchemaContext,
  schemaContext,
  useBlock,
  useEffect,
  useRule,
  useSchemaType,
} from '../../../hooks'
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule'
import { type ArraySchemaObject, type SchemaObject, type SchemaProps } from '../../../types'
import { defaultTo, pipe, required, type Rule, tupleOf } from '../../../utils'

export type TupleProps = SchemaProps<any[]> & {
  children?: JSX.Element
}

export const tuple: HandlerPlugin = () => {
  useBlock('path')

  const handler = useNewHandler()
  const {
    children,
    ...props
  } = useProps<TupleProps>()
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly
  const schema = useSchemaType('array', props) as ArraySchemaObject

  if (schema) {
    const schemas: SchemaObject[] = []
    handler[schemaContext.key] = schemas satisfies SchemaContext

    // @ts-expect-error: FIXME
    schema.prefixItems = schemas

    if (hasRules) {
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

      useEffect(() => {
        if (!rulesMap.length) {
          throw Error('<tuple> MUST have content')
        }
      })
    }

    innet(children, handler)
  }
}
