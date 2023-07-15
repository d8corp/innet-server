import { ApiValidationErrorData } from '../../../types'

export interface MaxDateValidationErrorData {
  max: string
}

export function maxDate <K> (max: Date) {
  return (value: Date, key: K): ApiValidationErrorData<K, MaxDateValidationErrorData> | undefined => {
    if (value > max) {
      return {
        error: 'maxDate',
        data: {
          key,
          max: max.toISOString(),
        },
      }
    }
  }
}
