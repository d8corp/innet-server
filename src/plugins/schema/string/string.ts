import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useApi, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type SchemaProps } from '../../../types'
import {
  defaultTo,
  getArrayValues,
  maxLength,
  minLength,
  pattern as patternTo,
  pipe,
  type Rule,
  values,
} from '../../../utils'

export type StringProps<T extends string = string> = SchemaProps<T> & {
  /**
   * An optional format modifier serves as a hint at the contents and format of the string.
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
   * */
  // eslint-disable-next-line perfectionist/sort-intersection-types, @typescript-eslint/ban-types
  format?: 'binary' | 'byte' | 'date' | 'date-time' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'password' | 'uri' | 'uuid' | (string & {})

  /**
   * String length can be restricted using `min` and `max`.
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
   * */
  max?: number

  /**
   * String length can be restricted using `min` and `max`.
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
   * */
  min?: number

  /**
   * The pattern keyword lets you define a regular expression template for the string value.
   * Only the values that match this template will be accepted.
   * The regular expression syntax used is from JavaScript (more specifically, ECMA 262).
   * Regular expressions are case-sensitive, that is, [a-z] and [A-Z] are different expressions.
   * @example For example, the following pattern matches a Social Security Number (SSN) in the 123-45-6789 format:
   * ```tsx
   * <string pattern='^\d{3}-\d{2}-\d{4}$' />
   * ```
   * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
   * */
  pattern?: RegExp | string

  /**
   * The `patternId` keyword is used to reference a pattern from the OpenAPI specification.
   * */
  patternId?: string
}

export const string: HandlerPlugin = () => {
  const {
    format,
    max,
    min,
    pattern,
    patternId,
    ...props
  } = useProps<StringProps>() || {}
  const { refRules } = useApi()
  const schema = useSchemaType('string', props)
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly

  if (schema) {
    const rules: Rule[] = []

    if (format !== undefined) {
      schema.format = format
    }

    if (props.default !== undefined) {
      rules.push(defaultTo(props.default))
    }

    rules.push(String)

    if (props.values) {
      rules.push(values(getArrayValues(props.values)))
    }

    if (format !== undefined) {
      schema.format = format
    }

    if (min !== undefined) {
      schema.minLength = min
      rules.push(minLength(min))
    }

    if (max !== undefined) {
      schema.maxLength = max
      rules.push(maxLength(max))
    }

    if (pattern !== undefined) {
      schema.pattern = String(pattern)
      rules.push(patternTo(pattern, patternId))
    }

    if (!hasRules) return

    const rule = pipe(...rules)

    if (props.ref) {
      refRules[props.ref] = rule
    }

    if (props.default !== undefined) {
      useRule(rule)
    } else {
      const parentRule = useParentRule()
      useRule(parentRule(rule))
    }
  } else if (props.ref && hasRules) {
    if (props.default !== undefined) {
      useRule(refRules[props.ref])
    } else {
      const parentRule = useParentRule()
      useRule(parentRule(refRules[props.ref]))
    }
  }
}
