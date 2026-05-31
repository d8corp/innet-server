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
import { arrayOf, defaultTo, nullable, oneOf, pipe, type Rule } from '../../../utils'

export type ArrayProps = SchemaProps<any[]> & {
  children?: JSX.Element
  max?: number
  min?: number
  unique?: boolean
}

export const array: HandlerPlugin = () => {
  useBlock('path')

  const setRule = useContext(ruleContext)
  const handler = useNewHandler()
  const {
    children,
    max,
    min,
    unique,
    ...props
  } = useProps<ArrayProps>()

  const schema = useSchemaType('array', props) as ArraySchemaObject
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  const fieldSchema: SchemaObject = {}
  handler[schemaContext.key] = fieldSchema satisfies SchemaContext

  schema.items = fieldSchema

  if (max) {
    schema.maxItems = max
  }

  if (min) {
    schema.minItems = min
  }

  if (unique) {
    schema.uniqueItems = unique
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
        const mainRule = rootRule(oneOf(oneOfRulesMap))
        setRule(props.nullable ? oneOf([nullable, mainRule]) : mainRule)
      }
    })

    innet(children, handler)

    useEffect(() => {
      if (!oneOfRulesMap) {
        setRule(props.nullable ? oneOf([nullable, rootRule(e => e)]) : rootRule(e => e))
      }
    })

    return
  }

  innet(children, handler)
}
