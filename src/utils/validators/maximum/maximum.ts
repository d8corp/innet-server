import { ApiValidationErrorData } from '../../../types'

export interface MaximumValidationErrorData {
  max: number
}

export function maximum <K> (max: number) {
  return (value: number, key: K): ApiValidationErrorData<K, MaximumValidationErrorData> | undefined => {
    if (value > max) {
      return {
        error: 'maximum',
        data: {
          key,
          max,
        },
      }
    }
  }
}
