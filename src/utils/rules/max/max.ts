import { RulesError } from '../helpers'

export function max (max: bigint | number) {
  return (value: any, data?: object) => {
    if (!['bigint', 'number'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if (value > max) {
      throw new RulesError('maximum', {
        ...data,
        max,
        value,
      })
    }

    return value
  }
}
