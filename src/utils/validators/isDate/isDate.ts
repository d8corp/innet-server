import { type ValidationErrorData } from '../../../types'

export function isDate (value: Date, data?: object): ValidationErrorData {
  if (isNaN(value as any)) {
    return {
      error: 'date',
      ...data,
    }
  }
}
