import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useFormatter, useSchemaType, useValidator } from '../../../hooks'
import { type ValuesSchemaProps } from '../../../types'
import {
  type DateFormat,
  dateFormat,
  dateFormatter,
  defaultFormatter,
  isDate,
  isEach,
  isValues,
  maxDate,
  minDate,
} from '../../../utils'

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

  const validator = [isDate]

  if (normMin) {
    validator.push(minDate(normMin))
  }

  if (normMax) {
    validator.push(maxDate(normMax))
  }

  if (defaultValue === undefined) {
    useFormatter(dateFormatter)
  } else {
    useFormatter(defaultFormatter(
      defaultValue === 'now' ? () => new Date(Date.now()) : normDefault,
      dateFormatter,
    ))
  }

  if (normValues) {
    useValidator(isValues(normValues))
  } else {
    useValidator(isEach(validator))
  }
}
