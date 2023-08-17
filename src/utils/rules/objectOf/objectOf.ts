import { addKey, RulesError } from '../helpers'
import { type Rule } from '../types'

export type ObjectOf = Record<string, Rule>

export function objectOf (map: ObjectOf) {
  return (value: any, data?: Record<string, any>) => {
    if (value === null || typeof value !== 'object') {
      throw new RulesError('object', data)
    }

    const result: any = {}

    for (const key in map) {
      result[key] = map[key](value[key], { ...data, key: addKey(key, data) })
    }

    return result
  }
}
