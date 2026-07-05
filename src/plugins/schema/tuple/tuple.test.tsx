import { useBody } from '../../../hooks'
import { runTest } from '../../../testing'

describe('tuple', () => {
  it('should convert a field to tuple', async () => {
    const log = jest.fn()

    function Runtime () {
      const body = useBody()
      log(body)

      return <success>{body}</success>
    }

    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart} port={3000}>
        <api>
          <endpoint method='post' path='/test'>
            <body>
              <object>
                name: <tuple><string /></tuple>
              </object>
            </body>
            <return>
              <Runtime />
            </return>
          </endpoint>
        </api>
        <return><error /></return>
      </server>),
    )

    const res = await fetch('http://localhost:3000/test', {
      body: JSON.stringify({
        name: 123,
      }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })

    const json = await res.json()

    await stop()

    expect(log).toHaveBeenCalledTimes(1)
    expect(json).toEqual({ name: ['123'] })
  })
})
