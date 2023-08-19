import { RulesError } from '../helpers'

export function maxLength (max: number) {
  return (value: any, data?: object) => {
    if (typeof value !== 'string') {
      throw new RulesError('string', data)
    }

    if (value.length > max) {
      throw new RulesError('maxLength', {
        ...data,
        value,
        max,
      })
    }

    return value
  }
}
