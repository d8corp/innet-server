import { RulesError } from '../helpers'

export function pattern (pattern: RegExp | string, patternId: string = String(pattern)) {
  const normPattern = typeof pattern === 'string' ? new RegExp(pattern) : pattern

  return (value: any, data?: object) => {
    if (!normPattern.test(value)) {
      throw new RulesError('pattern', {
        pattern: String(normPattern),
        patternId,
        value,
        ...data,
      })
    }

    return value
  }
}
