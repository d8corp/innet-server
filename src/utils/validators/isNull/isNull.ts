import { type ValidationErrorData } from '../../../types'

export function isNull (value: any, data?: object): ValidationErrorData {
  if (value !== null) {
    return {
      error: 'null',
      ...data,
    }
  }
}
