import { type ValidationErrorData } from '../../../types'

export function isBoolean (value: any, data?: object): ValidationErrorData {
  if (typeof value !== 'boolean') {
    return {
      error: 'boolean',
      ...data,
    }
  }
}
