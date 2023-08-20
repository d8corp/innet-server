import { RulesError } from '../helpers'

export function max (max: number | bigint) {
  return (value: any, data?: object) => {
    if (!['number', 'bigint'].includes(typeof value)) {
      throw new RulesError('number', {
        ...data,
        value,
      })
    }

    if (value > max) {
      throw new RulesError('maximum', {
        ...data,
        value,
        max,
      })
    }

    return value
  }
}
