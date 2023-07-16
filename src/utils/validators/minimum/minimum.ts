import { ApiValidationErrorData } from '../../../types'

export interface MinimumValidationErrorData {
  min: number
}

export function minimum <K> (min: number | BigInt) {
  return (value: number | BigInt, key: K): ApiValidationErrorData<K, MinimumValidationErrorData> | undefined => {
    if (value < min) {
      return {
        error: 'minimum',
        data: {
          key,
          min: Number(min),
        },
      }
    }
  }
}
