import { RulesError } from '../helpers'

export function nullable (value: any, data?: object) {
  if (value !== null && value !== 'null') {
    throw new RulesError('null', data)
  }

  return null
}
