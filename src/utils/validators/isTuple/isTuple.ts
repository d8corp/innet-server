import { type ValidationErrorData, type Validator } from '../../../types'

export function isTuple (validators?: readonly Validator<any, any>[]) {
  return (value: any, data?: object): ValidationErrorData => {
    if (!Array.isArray(value)) {
      return {
        error: 'tuple',
        ...data,
      }
    }

    if (validators) {
      for (let index = 0; index < validators.length; index++) {
        const error = validators[index](value, { index })
        if (error) {
          return error
        }
      }
    }
  }
}
