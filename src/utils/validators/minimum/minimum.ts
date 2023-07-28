import { type ApiValidationErrorData } from '../../../types'

export interface MinimumValidationErrorData {
  min: number
}

export function minimum <K> (min: number | bigint) {
  return (value: number | bigint, key: K): ApiValidationErrorData<K, MinimumValidationErrorData> | undefined => {
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
