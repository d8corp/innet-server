import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  objectRuleContext,
  objectSchemaContext,
  ruleContext,
  schemaContext, useApi,
  useBlock,
  useRule,
  useSchemaType,
} from '../../../hooks'
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule'
import { type BaseSchemaProps } from '../../../types'
import {
  defaultTo,
  type ObjectOf,
  objectOf,
  pipe,
  type Rule,
} from '../../../utils'

export interface ObjectProps extends BaseSchemaProps <object> {

}

export const object: HandlerPlugin = () => {
  useBlock('path')

  const children = useChildren()
  const props = useProps<ObjectProps>() || {}
  const { refRules } = useApi()

  const schema = useSchemaType('object', props)
  const handler = useNewHandler()

  if (schema) {
    schema.additionalProperties = {}
    objectSchemaContext.set(handler, schema)
    schemaContext.set(handler, schema.additionalProperties)
    parentRuleContext.reset(handler)

    const rules: Rule[] = []
    const rulesMap: ObjectOf = {}

    if (props?.default !== undefined) {
      rules.push(defaultTo(props.default))
    }

    let childRule: Rule = v => v

    const restRule: Rule = (value, data) => childRule(value, data)

    if (props?.default !== undefined) {
      rules.push(objectOf(rulesMap, restRule))
    } else {
      const parentRule = useParentRule()
      rules.push(parentRule(objectOf(rulesMap, restRule)))
    }

    const rule = pipe(...rules)

    if (props.ref) {
      refRules[props.ref] = rule
    }

    useRule(rule)
    objectRuleContext.set(handler, rulesMap)
    ruleContext.set(handler, rule => {
      childRule = rule
    })
    parentRuleContext.reset(handler)

    innet(children, handler)
  } else if (props.ref) {
    useRule(refRules[props.ref])
  }
}
