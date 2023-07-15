import { ApiValidationErrorData } from '../../../types'

export function isDate<K> (value: Date, key: K): ApiValidationErrorData<K> | undefined {
  if (isNaN(value as any)) {
    return {
      error: 'date',
      data: {
        key,
      },
    }
  }
}
