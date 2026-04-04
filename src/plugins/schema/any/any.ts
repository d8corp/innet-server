import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type SchemaProps } from '../../../types'
import { defaultTo, pipe, type Rule } from '../../../utils'

export type AnyProps = SchemaProps<any>

export const any: HandlerPlugin = () => {
  const props = useProps<AnyProps>()
  useSchemaType('any', props)
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  if (!hasRules) return

  const rules: Rule[] = []

  if (props?.default !== undefined) {
    rules.push(defaultTo(props.default))
  }

  if (props?.default === undefined) {
    const parentRule = useParentRule()
    useRule(parentRule(pipe(...rules)))
  } else {
    useRule(pipe(...rules))
  }
}
