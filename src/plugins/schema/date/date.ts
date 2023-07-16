import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useRulesPlugin, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'
import { DateFormat, dateFormat, isDate, maxDate, minDate } from '../../../utils'

export interface DateProps extends SchemaValuesTypeOptions <DateFormat>{
  min?: DateFormat
  max?: DateFormat
}

export const date: HandlerPlugin = () => {
  const {
    min,
    max,
    default: defaultValue,
    example,
    values,
    ...props
  } = useProps<DateProps>() || {}
  const normMin = dateFormat(min)
  const normMax = dateFormat(max)
  const normDefault = dateFormat(defaultValue)
  const normExample = dateFormat(example)
  const normValues = values?.map(dateFormat)
  const stringValues = normValues?.map(value => value.toISOString())

  const schema = useSchemaType('string', {
    ...props,
    values: stringValues,
    example: normExample?.toISOString(),
    default: defaultValue === 'now' ? undefined : normDefault?.toISOString(),
  })

  schema.format = 'date-time'

  if (normMin) {
    schema['x-minimum'] = normMin.toISOString()
  }

  if (normMax) {
    schema['x-maximum'] = normMax.toISOString()
  }

  if (defaultValue === 'now') {
    schema['x-default'] = 'now'
  }

  const validator = [isDate]

  if (normMin) {
    validator.push(minDate(normMin))
  }

  if (normMax) {
    validator.push(maxDate(normMax))
  }

  useRulesPlugin({
    defaultValue: defaultValue === 'now' ? () => new Date(Date.now()) : normDefault,
    formatter: [value => new Date(value)],
    validator,
    values: normValues,
    isValues: dates => {
      const values = dates.map(date => date.toISOString())
      return (value, key) => {
        if (isNaN(value as any) || !values.includes(value.toISOString())) {
          return {
            error: 'values',
            data: {
              key,
              values,
            },
          }
        }
      }
    },
  })
}
