import { type ValidationErrorData } from '../../../types'

export function maximum (max: number | bigint) {
  return (value: number | bigint, data?: object): ValidationErrorData => {
    if (value > max) {
      return {
        error: 'maximum',
        max: Number(max),
        ...data,
      }
    }
  }
}
