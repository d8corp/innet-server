import { ApiValidationErrorData } from '../../../types'

const UUID_REG = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/

export function isUuid<K> (value: string, key: K): ApiValidationErrorData<K> | undefined {
  if (!UUID_REG.test(value)) {
    return {
      error: 'uuid',
      data: {
        key,
      },
    }
  }
}
