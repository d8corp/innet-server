import { type ValidationErrorData, type Validator } from '../../../types'

export function isEach (validators: Validator<any, any>[]) {
  return (value: any, data?: object): ValidationErrorData => {
    for (const validator of validators) {
      const error = validator(value, data)
      if (error) {
        return error
      }
    }
  }
}
