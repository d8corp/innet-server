import { type ValidationErrorData } from '../../../types'

export function maxDate (max: Date) {
  return (value: Date, data?: object): ValidationErrorData => {
    if (value > max) {
      return {
        error: 'maxDate',
        max: max.toISOString(),
        ...data,
      }
    }
  }
}
