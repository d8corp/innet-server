import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export interface MinimumValidationErrorData {
  min: number
}

export function minimum <K> (min: number) {
  return (value: number, key: K): ValidationResponse<K, MinimumValidationErrorData> => {
    if (value < min) {
      return {
        error: ApiValidationError.minimum,
        data: {
          key,
          min,
        },
      }
    }
  }
}
