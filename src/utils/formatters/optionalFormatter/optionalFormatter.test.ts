import { optionalFormatter } from './optionalFormatter'

describe('optionalFormatter', () => {
  test('undefined', () => {
    const format = optionalFormatter(Number)

    const result = format(undefined)

    expect(result).toBe(undefined)
  })
  test('any other', () => {
    const format = optionalFormatter(Number)

    const result1 = format(1)
    const result2 = format('1')
    const result3 = format(false)
    const result4 = format(true)
    const result5 = format(null)
    const result6 = format('null')
    const result7 = format([])
    const result8 = format([2])
    const result9 = format([1, 2])
    const result10 = format({})

    expect(result1).toBe(1)
    expect(result2).toBe(1)
    expect(result3).toBe(0)
    expect(result4).toBe(1)
    expect(result5).toBe(0)
    expect(result6).toBe(NaN)
    expect(result7).toBe(0)
    expect(result8).toBe(2)
    expect(result9).toBe(NaN)
    expect(result10).toBe(NaN)
  })
  test('complex formatter', () => {
    const num = <I>(value: I): I extends string ? number : never => {
      if (typeof value === 'string') {
        // @ts-expect-error: FIXME
        return Number(value)
      }

      throw Error('')
    }

    const format = optionalFormatter(num)

    const result = format('1')

    expect(result).toBe(1)
  })
})
