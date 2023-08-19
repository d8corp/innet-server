import { type Rule } from '../types'

export function pipe (...rules: Rule[]): Rule {
  return (value: any, data?: object) => {
    return rules.reduce((value, rule) => rule(value, data), value)
  }
}
