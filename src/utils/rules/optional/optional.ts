import { type Rule } from '../types'

export function optional (rule: Rule) {
  return (value: any, data?: object) => {
    if (value === undefined) return

    return rule(value, data)
  }
}
