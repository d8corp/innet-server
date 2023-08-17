import { RulesError } from '../helpers'

export function num (value: any, data?: object) {
  const result = Number(value)

  if (isNaN(result) || result > Number.MAX_SAFE_INTEGER || result < -Number.MAX_SAFE_INTEGER) {
    throw new RulesError('number', data)
  }

  return result
}
