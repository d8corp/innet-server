import { ValidationResponse } from '@cantinc/utils'

import { ApiValidationError } from '../../../constants'
import { IntegerFormats } from '../../../types'

export interface IntegerData {
  format: IntegerFormats
}

const sizes: Record<IntegerFormats, number | bigint> = {
  int32: 2_147_483_647,
  int64: BigInt('9223372036854775807'),
}

export function isInteger<K> (format: IntegerFormats) {
  const validator = format === 'int32' ? isNaN : (value: any) => isNaN(parseInt(value))

  return (value: number, key: K): ValidationResponse<K, IntegerData> => {
    if (validator(value) || value > sizes[format]) {
      return {
        error: ApiValidationError.integer,
        data: {
          key,
          format,
        },
      }
    }
  }
}
