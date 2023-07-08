import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export function isNumber<K> (value: number, key: K): ValidationResponse<K> {
  if (isNaN(value) || value > Number.MAX_SAFE_INTEGER) {
    return {
      error: ApiValidationError.number,
      data: {
        key,
      },
    }
  }
}
