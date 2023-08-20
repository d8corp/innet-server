import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type ValuesSchemaProps } from '../../../types'
import {
  defaultTo,
  maxLength,
  minLength,
  pattern as patternTo,
  pipe,
  type Rule,
  values,
} from '../../../utils'

export interface StringProps extends ValuesSchemaProps <string> {
  min?: number
  max?: number
  pattern?: string | RegExp
  patternId?: string
}

export const string: HandlerPlugin = () => {
  const {
    min,
    max,
    pattern,
    patternId,
    ...props
  } = useProps<StringProps>() || {}
  const schema = useSchemaType('string', props)
  const rules: Rule[] = []

  if (props.default !== undefined) {
    rules.push(defaultTo(props.default))
  }

  rules.push(String)

  if (props.values) {
    rules.push(values(props.values))
  }

  if (min !== undefined) {
    // @ts-expect-error: FIXME
    schema.minimum = min
    rules.push(minLength(min))
  }

  if (max !== undefined) {
    // @ts-expect-error: FIXME
    schema.maximum = max
    rules.push(maxLength(max))
  }

  if (pattern !== undefined) {
    // @ts-expect-error: FIXME
    schema.pattern = String(pattern)
    rules.push(patternTo(pattern, patternId))
  }

  if (props.default) {
    useRule(pipe(...rules))
  } else {
    const parentRule = useParentRule()
    useRule(parentRule(pipe(...rules)))
  }
}
