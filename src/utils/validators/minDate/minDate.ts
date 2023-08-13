import { type ValidationErrorData } from '../../../types'

export function minDate (min: Date) {
  return (value: Date, data?: object): ValidationErrorData => {
    if (value < min) {
      return {
        error: 'minDate',
        min: min.toISOString(),
        ...data,
      }
    }
  }
}
