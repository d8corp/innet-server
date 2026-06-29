import { type HandlerPlugin } from 'innet'
import { useContext, useProps } from '@innet/jsx'

import { bodyContext, useRule, useSchemaType } from '../../../hooks'
import { useParentRule } from '../../../hooks/useParentRule'
import { type SchemaProps } from '../../../types'
import {
  type DateFormat,
  dateTo as DateRule,
  type DefaultDateFormat,
  defaultTo,
  getArrayValues,
  maxDate,
  minDate,
  nullable,
  oneOf,
  pipe,
  type Rule,
  values as valuesOf,
} from '../../../utils'
import { dateFormat } from '../../../utils/dateFormat'

export type DateProps = SchemaProps<DateFormat, DefaultDateFormat> & {
  /**
   * Maximum allowed date.
   *
   * @example
   * ```tsx
   * <date max='2025-02-25' />
   * ```
   */
  max?: DateFormat

  /**
   * Minimum allowed date.
   *
   * @example
   * ```tsx
   * <date min='2025-02-25' />
   * ```
   */
  min?: DateFormat
}

export const date: HandlerPlugin = () => {
  const {
    default: defaultValue,
    example,
    examples,
    max,
    min,
    value,
    values,
    ...props
  } = useProps<DateProps>() || {}
  const isBody = Boolean(useContext(bodyContext))
  const hasRules = !isBody || !props.readOnly
  const normMin = dateFormat(min)
  const normMax = dateFormat(max)
  const normDefault = dateFormat(defaultValue)
  const normExample = dateFormat(example)
  const normValues = values && getArrayValues(values).map(dateFormat)
  // @ts-expect-error: FIXME
  const stringValues = normValues?.map(value => value.toISOString())
  const normExamples = examples?.map(dateFormat)

  const params: SchemaProps<string> = {
    ...props,
    default: defaultValue === 'now' ? undefined : normDefault?.toISOString(),
    example: normExample?.toISOString(),
    value: value instanceof Date ? value.toISOString() : typeof value === 'number' ? new Date(value).toISOString() : value as string,
    // @ts-expect-error: FIXME
    examples: normExamples?.map(example => example.toISOString()),
    values: stringValues,
  }

  const schema = useSchemaType('string', params)

  const rules: Rule[] = []

  if (defaultValue !== undefined) {
    rules.push(defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault))
  }

  rules.push(DateRule)

  if (stringValues) {
    rules.push((value, data) => valuesOf(stringValues)(value.toISOString(), data))
  }

  // @ts-expect-error: FIXME
  schema.format = 'date-time'

  if (normMin) {
    // @ts-expect-error: FIXME
    schema['x-minimum'] = normMin.toISOString()
    rules.push(minDate(normMin))
  }

  if (normMax) {
    // @ts-expect-error: FIXME
    schema['x-maximum'] = normMax.toISOString()
    rules.push(maxDate(normMax))
  }

  if (defaultValue === 'now') {
    // @ts-expect-error: FIXME
    schema['x-default'] = 'now'
  }

  if (!hasRules) {
    if (defaultValue !== undefined) {
      useRule(defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault))
    }

    return
  }

  const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules)

  if (defaultValue === undefined) {
    const parentRule = useParentRule()
    useRule(parentRule(rule))
  } else {
    useRule(rule)
  }
}
