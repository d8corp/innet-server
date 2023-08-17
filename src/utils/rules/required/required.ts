import { RulesError } from '../helpers'
import { type Rule } from '../types'

export function required (rule?: Rule) {
  return (value: any, data?: object) => {
    if (value === undefined) {
      throw new RulesError('required', data)
    }

    return rule?.(value, data)
  }
}
