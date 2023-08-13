import { optionalFormatter } from '../optionalFormatter'
import { arrayFormatter } from './arrayFormatter'

describe('arrayFormatter', () => {
  test('illegal', () => {
    const format = arrayFormatter(Number)

    const result1 = format(1)
    expect(result1).toEqual([])

    const result2 = format('string')
    expect(result2).toEqual([])

    const result3 = format(null)
    expect(result3).toEqual([])

    const result4 = format(undefined)
    expect(result4).toEqual([])

    const result5 = format({})
    expect(result5).toEqual([])

    const result6 = format(new Set())
    expect(result6).toEqual([])
  })
  test('legal', () => {
    const format = arrayFormatter(Number)

    const result1 = format(['1', false])
    expect(result1).toEqual([1, 0])
  })
  test('optional inside', () => {
    const format = arrayFormatter(optionalFormatter(Number))

    const result = format(['1', false, undefined] as const)

    expect(result).toEqual([1, 0, undefined])
  })
  test('optional outside', () => {
    const format = optionalFormatter(arrayFormatter(Number))

    const result1 = format(undefined)
    expect(result1).toEqual(undefined)

    const result2 = format([true, false])
    expect(result2).toEqual([1, 0])

    const result3 = format([undefined, true, false])
    expect(result3).toEqual([NaN, 1, 0])
  })
})
