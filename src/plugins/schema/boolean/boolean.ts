import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useBlock, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type SchemaProps } from '../../../types'
import { defaultTo, pipe, type Rule } from '../../../utils'

export type BooleanProps = SchemaProps<boolean>

export const boolean: HandlerPlugin = () => {
  useBlock('path')
  const props = useProps<BooleanProps>()
  useSchemaType('boolean', props)
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  if (!hasRules) return

  const rules: Rule[] = []

  if (props?.default !== undefined) {
    rules.push(defaultTo(props.default))
  }

  rules.push(val => val === 'true' || (val === 'false' ? false : Boolean(val)))

  if (props?.default === undefined) {
    const parentRule = useParentRule()
    useRule(parentRule(pipe(...rules)))
  } else {
    useRule(pipe(...rules))
  }
}
