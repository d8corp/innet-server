import { runTest } from '../../../testing'

describe('server', () => {
  it('Should return success', async () => {
    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart} port={3000}>
        <return>
          <success>
            Hello World!
          </success>
        </return>
      </server>
    ))

    const res = await fetch('http://localhost:3000')
    const text = await res.text()

    await stop()

    expect(res.ok).toBe(true)
    expect(text).toEqual('Hello World!')
  })

  it('Should return error', async () => {
    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart} port={3000}>
        <return>
          <error />
        </return>
      </server>
    ))

    const res = await fetch('http://localhost:3000')
    const json = await res.json()

    await stop()

    expect(res.ok).toBe(false)
    expect(json).toEqual({ error: 'undefined' })
  })

  describe('props', () => {
    describe('port', () => {
      it('Should change port', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart} port={3000}>
            <return>
              <success>
                Hello World!
              </success>
            </return>
          </server>
        ))

        const res = await fetch('http://localhost:3000')
        const text = await res.text()

        await stop()

        expect(text).toEqual('Hello World!')
      })
    })
    describe('formatError', () => {
      it('Should format error', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server
            formatError={({
              data,
              error,
            }) => JSON.stringify({ data, err: error })}
            onClose={onEnd}
            onStart={onStart}
            port={3000}>
            <return>
              <error code='test' />
            </return>
          </server>
        ))

        const res = await fetch('http://localhost:3000')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          err: 'test',
        })
      })
    })
    describe('onRequest', () => {
      it('Should call onClose', async () => {
        const fn = jest.fn()

        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onRequest={fn} onStart={onStart} port={3000}>
            <return>
              <error code='test' />
            </return>
          </server>
        ))

        expect(fn).not.toHaveBeenCalled()

        await fetch('http://localhost:3000')

        await stop()

        expect(fn).toHaveBeenCalled()
      })
    })
  })
})
