import { type ValidationErrorData } from '../../../types'

export function minLength (min: number) {
  return (value: string, data?: object): ValidationErrorData => {
    if (value.length < min) {
      return {
        error: 'minLength',
        min,
        ...data,
      }
    }
  }
}
