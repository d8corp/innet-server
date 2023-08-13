import { type ValidationErrorData } from '../../../types'

export function isNumber (value: number, data?: object): ValidationErrorData {
  if (isNaN(value) || value > Number.MAX_SAFE_INTEGER || value < -Number.MAX_SAFE_INTEGER) {
    return {
      error: 'number',
      ...data,
    }
  }
}
