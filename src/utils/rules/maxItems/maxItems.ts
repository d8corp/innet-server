import { RulesError } from '../helpers'

export function maxItems (max: number) {
  return (value: any[], data?: object) => {
    if (value.length > max) {
      throw new RulesError('maxItems', {
        ...data,
        max,
        value,
      })
    }

    return value
  }
}
