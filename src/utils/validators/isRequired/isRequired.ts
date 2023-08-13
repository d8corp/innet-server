import { type ValidationErrorData, type Validator } from '../../../types'

export function isRequired (validator?: Validator<any, any>) {
  return (value: any, data?: object): ValidationErrorData => {
    if (value === undefined) {
      return {
        error: 'required',
        ...data,
      }
    }

    return validator?.(value, data)
  }
}
