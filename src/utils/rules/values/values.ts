import { RulesError } from '../helpers'

import { type SchemaValues } from '../../../types'

export function getArrayValues<T, F extends (value: T | string) => any = () => T> (values: SchemaValues<T>, format: F = (value => value) as F): ReturnType<F>[] {
  return Array.isArray(values) ? values.map(format) : Object.keys(values).map(format)
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
