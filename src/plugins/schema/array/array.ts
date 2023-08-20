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
import { arrayOf, defaultTo, oneOf, optional, pipe, type Rule } from '../../../utils'

export interface ArrayProps extends BaseSchemaProps <any[]> {

}

export const array: HandlerPlugin = () => {
  useBlock('path')

  const setRule = useContext(ruleContext)
  const handler = useNewHandler()
  const props = useProps<ArrayProps>()
  const schema = useSchemaType('array', props) as ArraySchemaObject
  const children = useChildren()

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.items = fieldSchema

  if (setRule) {
    const rules: Rule[] = []
    let oneOfRulesMap: Rule[]

    if (props?.default !== undefined) {
      rules.push(defaultTo(props.default))
    }

    const rootRule = props?.default === undefined
      ? (rule: Rule) => optional(pipe(...rules, arrayOf(rule)))
      : (rule: Rule) => pipe(...rules, arrayOf(rule))

    ruleContext.set(handler, rule => {
      if (oneOfRulesMap) {
        oneOfRulesMap.push(rule)
      } else {
        oneOfRulesMap = [rule]
        setRule(rootRule(oneOf(oneOfRulesMap)))
      }
    })
  }

  innet(children, handler)
}
