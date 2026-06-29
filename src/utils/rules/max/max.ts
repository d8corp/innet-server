import { RulesError } from '../helpers'

export function max (max: bigint | number, exclusive?: boolean) {
  return (value: any, data?: object) => {
    if (!['bigint', 'number'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if ((exclusive && value === max) || value > max) {
      throw new RulesError('maximum', {
        ...data,
        exclusive,
        max,
        value,
      })
    }

    return value
  }
}
