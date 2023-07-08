import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export interface MinDateValidationErrorData {
  min: string
}

export function minDate <K> (min: Date) {
  return (value: Date, key: K): ValidationResponse<K, MinDateValidationErrorData> => {
    if (value < min) {
      return {
        error: ApiValidationError.minDate,
        data: {
          key,
          min: min.toISOString(),
        },
      }
    }
  }
}
