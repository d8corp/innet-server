import { ApiValidationErrorData } from '../../../types'

export interface MinimumValidationErrorData {
  min: number
}

export function minimum <K> (min: number) {
  return (value: number, key: K): ApiValidationErrorData<K, MinimumValidationErrorData> | undefined => {
    if (value < min) {
      return {
        error: 'minimum',
        data: {
          key,
          min,
        },
      }
    }
  }
}
