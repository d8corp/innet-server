import { type ValidationErrorData } from '../../../types'

export function minimum (min: number | bigint) {
  return (value: number | bigint, data?: object): ValidationErrorData => {
    if (value < min) {
      return {
        error: 'minimum',
        min: Number(min),
        ...data,
      }
    }
  }
}
