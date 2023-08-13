import { type ValidationErrorData } from '../../../types'

const UUID_REG = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/

export function isUuid (value: any, data: object): ValidationErrorData {
  if (!UUID_REG.test(value)) {
    return {
      error: 'uuid',
      ...data,
    }
  }
}
