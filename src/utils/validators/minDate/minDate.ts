import { type ApiValidationErrorData } from '../../../types'

export interface MinDateValidationErrorData {
  min: string
}

export function minDate <K> (min: Date) {
  return (value: Date, key: K): ApiValidationErrorData<K, MinDateValidationErrorData> | undefined => {
    if (value < min) {
      return {
        error: 'minDate',
        data: {
          key,
          min: min.toISOString(),
        },
      }
    }
  }
}
