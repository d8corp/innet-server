import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useApi, useRule, useSchemaType } from '../../../hooks'
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
  const { refRules } = useApi()
  const schema = useSchemaType('string', props)

  if (schema) {
    const rules: Rule[] = []

    if (props.default !== undefined) {
      rules.push(defaultTo(props.default))
    }

    rules.push(String)

    if (props.values) {
      rules.push(values(props.values))
    }

    if (min !== undefined) {
      schema.minimum = min
      rules.push(minLength(min))
    }

    if (max !== undefined) {
      schema.maximum = max
      rules.push(maxLength(max))
    }

    if (pattern !== undefined) {
      schema.pattern = String(pattern)
      rules.push(patternTo(pattern, patternId))
    }

    const rule = pipe(...rules)

    if (props.ref) {
      refRules[props.ref] = rule
    }

    if (props.default) {
      useRule(rule)
    } else {
      const parentRule = useParentRule()
      useRule(parentRule(rule))
    }
  } else if (props.ref) {
    if (props.default) {
      useRule(refRules[props.ref])
    } else {
      const parentRule = useParentRule()
      useRule(parentRule(refRules[props.ref]))
    }
  }
}
