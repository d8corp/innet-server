import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useBlock, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type BaseSchemaProps } from '../../../types'
import { defaultTo, pipe, type Rule } from '../../../utils'

export interface BooleanProps extends BaseSchemaProps <boolean> {

}

export const boolean: HandlerPlugin = () => {
  useBlock('path')
  const props = useProps<BooleanProps>()
  useSchemaType('boolean', props)

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
