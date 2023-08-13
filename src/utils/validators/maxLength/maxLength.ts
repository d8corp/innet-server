import { type ValidationErrorData } from '../../../types'

export function maxLength (max: number) {
  return (value: string, data?: object): ValidationErrorData => {
    if (value.length > max) {
      return {
        error: 'maxLength',
        max,
        ...data,
      }
    }
  }
}
