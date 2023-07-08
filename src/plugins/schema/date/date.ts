import { HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { usePatchRules, useSchemaType } from '../../../hooks'
import { SchemaValuesTypeOptions } from '../../../types'
import { isDate, maxDate, minDate } from '../../../utils'

export interface DateProps extends SchemaValuesTypeOptions <string>{
  min?: string | number | Date
  max?: string | number | Date
}

export const date: HandlerPlugin = () => {
  const { min, max, ...props } = useProps<DateProps>() || {}
  const schema = useSchemaType('string', props)

  const normMin = min === undefined ? undefined : ['string', 'number'].includes(typeof min) ? new Date(min) : min as Date
  const normMax = max === undefined ? undefined : ['string', 'number'].includes(typeof max) ? new Date(max) : max as Date

  schema.format = 'date-time'

  if (normMin) {
    schema['x-minimum'] = normMin.toISOString()
  }

  if (normMax) {
    schema['x-maximum'] = normMax.toISOString()
  }

  usePatchRules({
    formatter: formatters => formatters.push(value => new Date(value)),
    validator: validators => {
      validators.push(isDate)

      if (normMin) {
        validators.push(minDate(normMin))
      }

      if (normMax) {
        validators.push(maxDate(normMax))
      }
    },
  })
}
