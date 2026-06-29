import { RulesError } from '../helpers'

export function min (min: bigint | number, exclusive?: boolean) {
  return (value: any, data?: object) => {
    if (!['bigint', 'number'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if ((exclusive && value === min) || value < min) {
      throw new RulesError('minimum', {
        ...data,
        min,
        value,
      })
    }

    return value
  }
}
