import { runTest } from '../../../testing'

describe('return', () => {
  it('Should return string', async () => {
    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart}>
        <return>
          <success>Hello World!</success>
        </return>
      </server>),
    )

    const res = await fetch('http://localhost')
    const text = await res.text()

    await stop()

    expect(text).toBe('Hello World!')
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toBe('text/plain; charset=utf-8')
  })

  it('Should return json', async () => {
    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart}>
        <return>
          <success>{{ data: 'Hello World!', success: true }}</success>
        </return>
      </server>),
    )

    const res = await fetch('http://localhost')
    const json = await res.json()

    await stop()

    expect(json).toEqual({ data: 'Hello World!', success: true })
    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toBe('application/json')
  })
})
