import { type ValidationErrorData, type Validator } from '../../../types'

export function isOptional (validator?: Validator<any, any>) {
  return (value: any, data?: object): ValidationErrorData => {
    if (value === undefined) {
      return
    }

    return validator?.(value, data)
  }
}
