import { RulesError } from '../helpers'

export function minLength (min: number) {
  return (value: any, data?: object) => {
    if (typeof value !== 'string') {
      throw new RulesError('string', data)
    }

    if (value.length < min) {
      throw new RulesError('minLength', {
        ...data,
        min,
        value,
      })
    }

    return value
  }
}
