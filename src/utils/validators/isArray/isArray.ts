import { type ValidationErrorData, type Validator } from '../../../types'

export function isArray (validator?: Validator<any, any>) {
  return (value: any, data?: object): ValidationErrorData => {
    if (!Array.isArray(value)) {
      return {
        error: 'array',
        ...data,
      }
    }

    if (validator) {
      for (let index = 0; index < value.length; index++) {
        const error = validator(value, { index })
        if (error) {
          return error
        }
      }
    }
  }
}
