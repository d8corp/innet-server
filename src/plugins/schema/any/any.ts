import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type BaseSchemaProps } from '../../../types'
import { defaultTo, pipe, type Rule } from '../../../utils'

export interface AnyProps extends BaseSchemaProps <boolean> {

}

export const any: HandlerPlugin = () => {
  const props = useProps<AnyProps>()
  useSchemaType('any', props)

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
