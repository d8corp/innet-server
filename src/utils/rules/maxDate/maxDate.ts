import { RulesError } from '../helpers'

export function maxDate (max: Date) {
  return (value: any, data?: object) => {
    if (!(value instanceof Date)) {
      throw new RulesError('date', data)
    }

    if (value > max) {
      throw new RulesError('maxDate', {
        ...data,
        max: max.toISOString(),
      })
    }

    return value
  }
}
