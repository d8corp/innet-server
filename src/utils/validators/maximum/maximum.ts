import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export interface MaximumValidationErrorData {
  max: number
}

export function maximum <K> (max: number) {
  return (value: number, key: K): ValidationResponse<K, MaximumValidationErrorData> => {
    if (value > max) {
      return {
        error: ApiValidationError.maximum,
        data: {
          key,
          max,
        },
      }
    }
  }
}
