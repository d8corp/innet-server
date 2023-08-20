import { addKey, RulesError } from '../helpers'
import { type Rule } from '../types'

export function arrayOf (formatter: Rule) {
  return (value: any, data?: object) => {
    if (value === undefined) {
      throw new RulesError('array', data)
    } else if (!Array.isArray(value)) {
      value = [value]
    }

    return value.map((val: any, index: number) => formatter(val, { ...data, key: addKey(index, data) }))
  }
}
