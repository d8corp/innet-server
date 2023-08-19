import { RulesError } from '../helpers'

export function pattern (pattern: string | RegExp, patternId: string = String(pattern)) {
  const normPattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern

  return (value: any, data?: object) => {
    if (!normPattern.test(value)) {
      throw new RulesError('pattern', {
        value,
        pattern: String(normPattern),
        patternId,
        ...data,
      })
    }

    return value
  }
}
