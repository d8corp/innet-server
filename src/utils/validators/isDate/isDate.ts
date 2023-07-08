import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'

export function isDate<K> (value: Date, key: K): ValidationResponse<K> {
  if (isNaN(value as any)) {
    return {
      error: ApiValidationError.date,
      data: {
        key,
      },
    }
  }
}
