import { RulesError } from '../helpers'

export function minItems (min: number) {
  return (value: any[], data?: object) => {
    if (value.length < min) {
      throw new RulesError('minItems', {
        ...data,
        min,
        value,
      })
    }

    return value
  }
}
