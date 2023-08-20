import { RulesError } from '../helpers'

export function minDate (min: Date) {
  return (value: any, data?: object) => {
    if (!(value instanceof Date)) {
      throw new RulesError('date', data)
    }

    if (value < min) {
      throw new RulesError('minDate', {
        ...data,
        value,
        min: min.toISOString(),
      })
    }

    return value
  }
}