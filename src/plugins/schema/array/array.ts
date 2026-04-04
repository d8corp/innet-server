import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import {
  bodyContext,
  ruleContext,
  type SchemaContext,
  schemaContext,
  useBlock,
  useEffect,
  useSchemaType,
} from '../../../hooks'
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule'
import { type ArraySchemaObject, type SchemaObject, type SchemaProps } from '../../../types'
import { arrayOf, defaultTo, oneOf, pipe, type Rule } from '../../../utils'

export type ArrayProps = SchemaProps<any[]> & {
  children?: JSX.Element
  maxItems?: number
  minItems?: number
  uniqueItems?: boolean
}

export const array: HandlerPlugin = () => {
  useBlock('path')

  const setRule = useContext(ruleContext)
  const handler = useNewHandler()
  const {
    children,
    maxItems,
    minItems,
    uniqueItems,
    ...props
  } = useProps<ArrayProps>()

  const schema = useSchemaType('array', props) as ArraySchemaObject
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.items = fieldSchema

  if (maxItems) {
    schema.maxItems = maxItems
  }

  if (minItems) {
    schema.minItems = minItems
  }

  if (uniqueItems) {
    schema.uniqueItems = uniqueItems
  }

  if (setRule && hasRules) {
    let oneOfRulesMap: Rule[]
    const rules: Rule[] = []
    const parentRule = useParentRule()

    if (props?.default !== undefined) {
      rules.push(defaultTo(props.default))
    }

    const rootRule = props?.default === undefined
      ? (rule: Rule) => parentRule(pipe(...rules, arrayOf(rule)))
      : (rule: Rule) => pipe(...rules, arrayOf(rule))

    parentRuleContext.reset(handler)
    ruleContext.set(handler, rule => {
      if (oneOfRulesMap) {
        oneOfRulesMap.push(rule)
      } else {
        oneOfRulesMap = [rule]
        setRule(rootRule(oneOf(oneOfRulesMap)))
      }
    })

    innet(children, handler)

    useEffect(() => {
      if (!oneOfRulesMap && setRule) {
        setRule(rootRule(e => e))
      }
    })

    return
  }

  innet(children, handler)
}
