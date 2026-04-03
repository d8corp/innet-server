import { RulesError } from '../helpers'

import { type ISOString } from '../../../types'

export type DateFormat = Date | ISOString | number
export type DefaultDateFormat = 'now' | DateFormat

export function dateTo (value: any, data?: object) {
  const result = new Date(value)

  if (isNaN(result as any)) {
    throw new RulesError('date', {
      value,
      ...data,
    })
  }

  return result
}
