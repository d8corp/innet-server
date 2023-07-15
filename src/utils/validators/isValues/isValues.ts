import { ApiValidationErrorData } from '../../../types'

export interface ValuesData <V> {
  values: V[]
}

export function isValues<K, V> (values: V[]) {
  return (value: V, key: K): ApiValidationErrorData<K, ValuesData<V>> | undefined => {
    if (!values.includes(value)) {
      return {
        error: 'values',
        data: {
          key,
          values,
        },
      }
    }
  }
}
