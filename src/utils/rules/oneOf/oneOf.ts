import { RulesError } from '../helpers'
import { type Rule } from '../types'

export function oneOf (formatters: Rule[]) {
  return (value: any, data?: object) => {
    const errors = []

    for (const formatter of formatters) {
      try {
        return formatter(value, data)
      } catch (e: any) {
        errors.push(e.data)
      }
    }

    throw new RulesError('oneOf', { errors })
  }
}
