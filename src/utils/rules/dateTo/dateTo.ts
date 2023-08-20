import { RulesError } from '../helpers'

export type DateFormat = 'now' | string | number | Date

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
