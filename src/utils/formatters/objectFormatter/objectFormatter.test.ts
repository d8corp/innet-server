import { optional } from '../optionalFormatter'
import { objectFormatter } from './objectFormatter'

describe('objectFormatter', () => {
  test('object inside', () => {
    const test1 = objectFormatter({
      field1: String,
    })

    const format = objectFormatter({
      test1: Number,
      test2: test1,
    })

    expect(format({
      test1: '123',
      asd: 123,
    })).toEqual({
      test1: 123,
    })

    expect(format({
      test1: '123',
      asd: 123,
      test2: '',
    })).toEqual({
      test1: 123,
      test2: false,
    })
  })
  test('optional inside', () => {
    const format = objectFormatter({
      test1: Number,
      test2: optional(Boolean),
    })

    expect(format({
      test1: '123',
      asd: 123,
    })).toEqual({
      test1: 123,
    })

    expect(format({
      test1: '123',
      asd: 123,
      test2: '',
    })).toEqual({
      test1: 123,
      test2: false,
    })
  })
  test('optional outside', () => {
    const format = optional(objectFormatter({
      test1: Number,
      test2: Boolean,
    }))

    const result = format({
      test1: '123',
      asd: 123,
    })

    expect(result).toEqual({
      test1: 123,
      test2: false,
    })
  })
})
