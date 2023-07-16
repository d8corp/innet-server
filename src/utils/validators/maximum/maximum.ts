import { ApiValidationErrorData } from '../../../types'

export interface MaximumValidationErrorData {
  max: number
}

export function maximum <K> (max: number | BigInt) {
  return (value: number | BigInt, key: K): ApiValidationErrorData<K, MaximumValidationErrorData> | undefined => {
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
