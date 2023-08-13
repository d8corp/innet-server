import { type ValidationErrorData } from '../../../types'

export interface ValuesData <V> {
  values: V[]
}

export function isValues<V> (values: V[]) {
  return (value: V, data: object): ValidationErrorData => {
    if (!values.includes(value)) {
      return {
        error: 'values',
        values,
        ...data,
      }
    }
  }
}
