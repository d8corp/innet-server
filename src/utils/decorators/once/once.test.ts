import { once } from './once'

describe('once', () => {
  it('should decorate a getter', () => {
    const fn = jest.fn()
    class Test {
      @once get test () {
        return fn()
      }
    }

    const test = new Test()

    expect(fn).toBeCalledTimes(0)
    expect(test.test)
    expect(fn).toBeCalledTimes(1)
    expect(test.test)
    expect(fn).toBeCalledTimes(1)
  })
  it('should decorate method', () => {
    const fn = jest.fn()
    class Test {
      @once test () {
        fn()
      }
    }

    const test = new Test()

    expect(fn).toBeCalledTimes(0)
    test.test()
    expect(fn).toBeCalledTimes(1)
    test.test()
    expect(fn).toBeCalledTimes(1)
  })
  it('should decorate setter', () => {
    const fn = jest.fn()
    class Test {
      readonly #test = 0
      get test () {
        return this.#test
      }

      @once set test (value) {
        fn(value)
      }
    }

    const test = new Test()

    expect(fn).toBeCalledTimes(0)
    test.test = 1
    expect(fn).toBeCalledTimes(1)
    test.test = 2
    expect(fn).toBeCalledTimes(1)
  })
  it('should decorate field', () => {
    const fn = jest.fn()
    class Test {
      @once test = () => fn()
    }

    const test = new Test()

    expect(fn).toBeCalledTimes(0)
    test.test()
    expect(fn).toBeCalledTimes(1)
    test.test()
    expect(fn).toBeCalledTimes(1)
  })
})
