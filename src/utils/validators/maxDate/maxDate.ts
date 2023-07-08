import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export interface MaxDateValidationErrorData {
  max: string
}

export function maxDate <K> (max: Date) {
  return (value: Date, key: K): ValidationResponse<K, MaxDateValidationErrorData> => {
    if (value > max) {
      return {
        error: ApiValidationError.maxDate,
        data: {
          key,
          max: max.toISOString(),
        },
      }
    }
  }
}
