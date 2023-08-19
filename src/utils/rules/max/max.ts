import { RulesError } from '../helpers'

export function max (max: number | bigint) {
  return (value: any, data?: object) => {
    if (typeof value !== 'number') {
      throw new RulesError('number', data)
    }

    if (value > max) {
      throw new RulesError('maximum', {
        ...data,
        max,
      })
    }

    return value
  }
}
