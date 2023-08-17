import { addKey, RulesError } from '../helpers'
import { type Rule } from '../types'

export function tupleOf (rules: Rule[]) {
  return (value: any, data?: object) => {
    if (!Array.isArray(value)) {
      throw new RulesError('tuple', data)
    }

    const result = []

    for (let index = 0; index < rules.length; index++) {
      result.push(rules[index](value, { ...data, key: addKey(index, data) }))
    }

    return result
  }
}
