import { addKey, RulesError } from '../helpers'
import { type Rule } from '../types'

export function arrayOf (formatter: Rule) {
  return (value: any, data?: object) => {
    if (!Array.isArray(value)) {
      throw new RulesError('array', data)
    }

    return value.map((val, index) => formatter(val, { ...data, key: addKey(index, data) }))
  }
}
