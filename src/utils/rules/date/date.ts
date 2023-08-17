import { RulesError } from '../helpers'

export function date (value: any, data?: object) {
  const result = new Date(value)

  if (isNaN(result as any)) {
    throw new RulesError('date', data)
  }

  return result
}
