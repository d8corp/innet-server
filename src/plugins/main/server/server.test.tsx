import { innet } from 'innet'
import { Watch } from 'watch-state'

import { handler } from '../../../handler'

function run (app: any) {
  const server = new Watch(() => {
    innet(app, handler)
  })

  return () => server.destroy()
}

describe('server', () => {
  it('Should return success', async () => {
    const stop = run(
      <server>
        <return>
          <success>
            Hello World!
          </success>
        </return>
      </server>,
    )

    const res = await fetch('http://localhost')
    const text = await res.text()

    stop()

    expect(res.ok).toBe(true)
    expect(text).toEqual('Hello World!')
  })

  it('Should return error', async () => {
    const stop = run(
      <server>
        <return>
          <error />
        </return>
      </server>,
    )

    const res = await fetch('http://localhost')
    const json = await res.json()

    stop()

    expect(res.ok).toBe(false)
    expect(json).toEqual({ error: 'undefined' })
  })

  describe('props', () => {
    describe('port', () => {
      it('Should change port', async () => {
        const stop = run(
          <server port={3000}>
            <return>
              <success>
                Hello World!
              </success>
            </return>
          </server>,
        )

        const res = await fetch('http://localhost:3000')
        const text = await res.text()

        stop()

        expect(text).toEqual('Hello World!')
      })
    })
    describe('formatError', () => {
      it('Should format error', async () => {
        const stop = run(
          <server formatError={({
            data,
            error,
          }) => JSON.stringify({ data, err: error })}>
            <return>
              <error code='test' />
            </return>
          </server>,
        )

        const res = await fetch('http://localhost')
        const json = await res.json()

        stop()

        expect(json).toEqual({
          err: 'test',
        })
      })
    })
    describe('onStart', () => {
      it('Should call onStart', async () => {
        const {
          promise,
          resolve,
        } = Promise.withResolvers()

        const stop = run(
          <server onStart={resolve}>
            <return>
              <error code='test' />
            </return>
          </server>,
        )

        await promise

        stop()
      })
    })
    describe('onClose', () => {
      it('Should call onClose', async () => {
        const {
          promise,
          resolve,
        } = Promise.withResolvers()

        const fn = jest.fn()

        const stop = run(
          <server onClose={fn} onStart={resolve}>
            <return>
              <error code='test' />
            </return>
          </server>,
        )

        await promise

        expect(fn).not.toHaveBeenCalled()

        stop()

        await new Promise(resolve => setTimeout(resolve))

        expect(fn).toHaveBeenCalled()
      })
    })
    describe('onRequest', () => {
      it('Should call onClose', async () => {
        const {
          promise,
          resolve,
        } = Promise.withResolvers()

        const fn = jest.fn()

        const stop = run(
          <server onRequest={fn} onStart={resolve}>
            <return>
              <error code='test' />
            </return>
          </server>,
        )

        await promise

        expect(fn).not.toHaveBeenCalled()

        await fetch('http://localhost')

        stop()

        expect(fn).toHaveBeenCalled()
      })
    })
  })
})
