import { RulesError } from '../helpers'

export function min (min: bigint | number) {
  return (value: any, data?: object) => {
    if (!['bigint', 'number'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if (value < min) {
      throw new RulesError('minimum', {
        ...data,
        min,
        value,
      })
    }

    return value
  }
}
