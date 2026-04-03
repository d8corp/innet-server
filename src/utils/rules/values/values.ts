import { RulesError } from '../helpers'

import type { SchemaValues } from '../../../types'

export function getArrayValues<T extends Record<number | string, unknown> | unknown[]> (values: T): T extends SchemaValues<infer V> ? V[] : never {
  // @ts-expect-error TODO: Fix types
  return Array.isArray(values) ? values : Object.keys(values)
}

export function values<T> (values: T[]) {
  return (value: any, data?: object) => {
    if (!values.includes(value)) {
      throw new RulesError('values', {
        ...data,
        value,
        values,
      })
    }

    return value
  }
}
