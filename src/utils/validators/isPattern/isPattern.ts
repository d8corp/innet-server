import { type ValidationErrorData } from '../../../types'

export function isPattern (pattern: string | RegExp, patternId: string = String(pattern)) {
  const normPattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern

  return (value: string, data?: object): ValidationErrorData => {
    if (!normPattern.test(value)) {
      return {
        error: 'pattern',
        patternId,
        ...data,
      }
    }
  }
}
