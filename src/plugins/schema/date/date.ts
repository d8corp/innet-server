import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRule, useSchemaType } from '../../../hooks'
import { type ValuesSchemaProps } from '../../../types'
import {
  type DateFormat,
  dateTo as DateRule,
  defaultTo,
  maxDate,
  minDate, pipe,
  type Rule,
} from '../../../utils'
import { dateFormat } from '../../../utils/dateFormat'

export interface DateProps extends ValuesSchemaProps <DateFormat> {
  min?: DateFormat
  max?: DateFormat
}

export const date: HandlerPlugin = () => {
  const {
    min,
    max,
    default: defaultValue,
    example,
    examples,
    values,
    ...props
  } = useProps<DateProps>() || {}
  const normMin = dateFormat(min)
  const normMax = dateFormat(max)
  const normDefault = dateFormat(defaultValue)
  const normExample = dateFormat(example)
  const normValues = values?.map(dateFormat)
  // @ts-expect-error: FIXME
  const stringValues = normValues?.map(value => value.toISOString())
  const normExamples = examples?.map(dateFormat)

  const schema = useSchemaType('string', {
    ...props,
    values: stringValues,
    example: normExample?.toISOString(),
    // @ts-expect-error: FIXME
    examples: normExamples?.map(example => example.toISOString()),
    default: defaultValue === 'now' ? undefined : normDefault?.toISOString(),
  })

  // @ts-expect-error: FIXME
  schema.format = 'date-time'

  if (normMin) {
    // @ts-expect-error: FIXME
    schema['x-minimum'] = normMin.toISOString()
  }

  if (normMax) {
    // @ts-expect-error: FIXME
    schema['x-maximum'] = normMax.toISOString()
  }

  if (defaultValue === 'now') {
    // @ts-expect-error: FIXME
    schema['x-default'] = 'now'
  }

  const rules: Rule[] = [DateRule]

  if (normMin) {
    rules.push(minDate(normMin))
  }

  if (normMax) {
    rules.push(maxDate(normMax))
  }

  const rule = pipe(...rules)

  if (defaultValue === undefined) {
    useRule(rule)
  } else {
    useRule(pipe(defaultTo(defaultValue === 'now' ? () => new Date(Date.now()) : normDefault), rule))
  }
}
