import { RulesError } from '../helpers'

export function min (min: number | bigint) {
  return (value: any, data?: object) => {
    if (!['number', 'bigint'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if (value < min) {
      throw new RulesError('minimum', {
        ...data,
        value,
        min,
      })
    }

    return value
  }
}
