import { optionalFormatter } from '../optionalFormatter'
import { tupleFormatter } from './tupleFormatter'

describe('tupleFormatter', () => {
  test('illegal', () => {
    const format = tupleFormatter([Number])

    const result1 = format(1)
    expect(result1).toEqual([0])

    const result2 = format('string')
    expect(result2).toEqual([0])

    const result3 = format(null)
    expect(result3).toEqual([0])

    const result4 = format(undefined)
    expect(result4).toEqual([0])

    const result5 = format({})
    expect(result5).toEqual([0])

    const result6 = format(new Set())
    expect(result6).toEqual([0])
  })
  test('legal', () => {
    const format = tupleFormatter([Number])

    const result1 = format(['1', false])
    expect(result1).toEqual([1])
  })
  test('optional inside', () => {
    const format = tupleFormatter([optionalFormatter(Number), Number])

    const result = format([undefined, true, undefined] as const)

    expect(result).toEqual([undefined, 1])
  })
  test('optional outside', () => {
    const format = optionalFormatter(tupleFormatter([Number]))

    const result1 = format(undefined)
    expect(result1).toEqual(undefined)

    const result2 = format([true, false])
    expect(result2).toEqual([1])

    const result3 = format([undefined, true, false])
    expect(result3).toEqual([NaN])
  })
})
