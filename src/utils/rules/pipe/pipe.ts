import { type Rule } from '../types'

export function pipe (...rules: Rule[]) {
  return (value: any, data?: object) => {
    return rules.reduce((rule, value) => rule(value, data), value)
  }
}
