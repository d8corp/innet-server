import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export interface ValuesData <V> {
  values: V[]
}

export function isValues<K, V> (values: V[]) {
  return (value: V, key: K): ValidationResponse<K, ValuesData<V>> => {
    if (!values.includes(value)) {
      return {
        error: ApiValidationError.values,
        data: {
          key,
          values,
        },
      }
    }
  }
}
