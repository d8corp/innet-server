import { useBody } from '../../../hooks'
import { runTest } from '../../../testing'

describe('string', () => {
  it('should convert number into string for body', async () => {
    const log = jest.fn()

    function Runtime () {
      const body = useBody()
      log(body)

      return <success>{body}</success>
    }

    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart}>
        <api>
          <endpoint method='post' path='/test'>
            <body>
              <object>
                name: <string />
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

    const res = await fetch('http://localhost/test', {
      body: JSON.stringify({
        name: 123,
      }),
      headers: { 'content-type': 'application/json' },
      method: 'post',
    })

    const json = await res.json()

    await stop()

    expect(json).toEqual({ name: '123' })
    expect(log).toHaveBeenCalledTimes(1)
  })
})
