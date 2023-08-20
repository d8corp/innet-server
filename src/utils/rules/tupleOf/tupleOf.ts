import { addKey, RulesError } from '../helpers'
import { type Rule } from '../types'

export function tupleOf (rules: Rule[]) {
  return (value: any, data?: object) => {
    if (value === undefined) {
      throw new RulesError('tuple', data)
    } else if (!Array.isArray(value)) {
      value = [value]
    }

    const result = []

    for (let index = 0; index < rules.length; index++) {
      result.push(rules[index](value[index], { ...data, key: addKey(index, data) }))
    }

    return result
  }
}
