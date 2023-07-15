import { ApiValidationErrorData } from '../../../types'

export function isNumber<K> (value: number, key: K): ApiValidationErrorData<K> | undefined {
  if (isNaN(value) || value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER) {
    return {
      error: 'number',
      data: {
        key,
      },
    }
  }
}
