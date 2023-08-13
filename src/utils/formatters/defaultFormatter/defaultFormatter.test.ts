import { defaultFormatter } from './defaultFormatter'

describe('defaultFormatter', () => {
  test('undefined', () => {
    const format = defaultFormatter(0, Number)

    const result = format(undefined)

    expect(result).toBe(0)
  })
  test('any other', () => {
    const format = defaultFormatter(0, Number)

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
})
