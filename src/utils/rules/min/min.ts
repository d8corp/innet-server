import { RulesError } from '../helpers'

export function min (min: number | bigint) {
  return (value: any, data?: object) => {
    if (typeof value !== 'number') {
      throw new RulesError('number', data)
    }

    if (value < min) {
      throw new RulesError('minimum', {
        ...data,
        min,
      })
    }

    return value
  }
}
