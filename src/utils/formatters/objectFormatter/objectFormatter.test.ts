import { optionalFormatter } from '../optionalFormatter'
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

    const result1 = format({
      test1: '123',
    })

    const result2 = format({
      test1: '123',
      asd: 123,
      test2: { field1: true },
    })

    expect(result1).toEqual({
      test1: 123,
      test2: {
        field1: 'undefined',
      },
    })

    expect(result2).toEqual({
      test1: 123,
      test2: {
        field1: 'true',
      },
    })
  })
  test('optional inside', () => {
    const format = objectFormatter({
      test1: Number,
      test2: optionalFormatter(Boolean),
    })

    const result1 = format({
      test1: '123',
      test2: undefined,
    })

    const result2 = format({
      test1: '123',
      test2: '',
    })

    expect(result1).toEqual({
      test1: 123,
    })

    expect(result2).toEqual({
      test1: 123,
      test2: false,
    })
  })
  test('optional outside', () => {
    const format = optionalFormatter(objectFormatter({
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
