import innet, { type HandlerPlugin, useNewHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import {
  objectRuleContext,
  ruleContext,
  schemaContext, useApi,
  useBlock,
  useRule,
  useSchemaType,
} from '../../../hooks'
import { parentRuleContext } from '../../../hooks/useParentRule'
import { type BaseSchemaProps } from '../../../types'
import {
  type ObjectOf,
  objectOf,
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
    schemaContext.set(handler, schema)
    parentRuleContext.reset(handler)

    const rulesMap: ObjectOf = {}
    const rule = objectOf(rulesMap)

    if (props.ref) {
      refRules[props.ref] = rule
    }

    useRule(rule)
    objectRuleContext.set(handler, rulesMap)
    ruleContext.set(handler, null)

    innet(children, handler)
  } else if (props.ref) {
    useRule(refRules[props.ref])
  }
}
