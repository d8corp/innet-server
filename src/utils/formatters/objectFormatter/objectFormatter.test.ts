import { optional } from '../optionalFormatter'
import { objectFormatter } from './objectFormatter'

describe('objectFormatter', () => {
  test('default', () => {
    const format1 = objectFormatter({
      test1: Number,
      test2: optional(Boolean),
    })

    const result = format1({
      test1: '123',
      asd: 123,
    })

    expect(result).toEqual({
      test1: 123,
    })
  })
})
