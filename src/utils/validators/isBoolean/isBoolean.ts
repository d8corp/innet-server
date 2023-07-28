import { type ApiValidationErrorData } from '../../../types'

export function isBoolean<K> (value: boolean, key: K): ApiValidationErrorData<K> | undefined {
  if (typeof value !== 'boolean') {
    return {
      error: 'boolean',
      data: {
        key,
      },
    }
  }
}
