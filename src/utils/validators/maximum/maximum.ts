import { type ApiValidationErrorData } from '../../../types'

export interface MaximumValidationErrorData {
  max: number
}

export function maximum <K> (max: number | bigint) {
  return (value: number | bigint, key: K): ApiValidationErrorData<K, MaximumValidationErrorData> | undefined => {
    if (value > max) {
      return {
        error: 'maximum',
        data: {
          key,
          max: Number(max),
        },
      }
    }
  }
}
