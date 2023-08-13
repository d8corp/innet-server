import { type ValidationErrorData, type Validator } from '../../../types'

export type ObjectValidatorMap = Record<string, Validator<any, any>>

export function isObject (map?: ObjectValidatorMap) {
  return (value: any, data?: object): ValidationErrorData => {
    if (!value || typeof value !== 'object') {
      return {
        error: 'object',
        ...data,
      }
    }

    if (map) {
      for (const key in map) {
        const error = map[key](value[key], { key })
        if (error) {
          return error
        }
      }
    }
  }
}
