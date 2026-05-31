import { RulesError } from '../helpers'

export function unique (value: any[], data?: object) {
  const uniqueValues = new Set(value)

  if (value.length !== uniqueValues.size) {
    throw new RulesError('unique', {
      ...data,
      value,
    })
  }

  return value
}
