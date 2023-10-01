import innet from 'innet'
import { Watch } from 'watch-state'

import { handler } from './handler'
import { useApi } from './hooks'

function getLog () {
  const fn = jest.fn()
  const Log = () => {
    const { docs } = useApi()

    fn(docs)
  }

  return [Log, fn]
}

function run (app: any) {
  const server = new Watch(() => {
    innet(app, handler)
  })

  server.destroy()
}

describe('Open API', () => {
  test('minimal setup', () => {
    const [Log, fn] = getLog()

    run(
      <server>
        <api>
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      info: {
        title: '',
        version: '0.0.0',
      },
      openapi: '3.1.0',
      paths: {},
    })
  })
  test('title', () => {
    const [Log, fn] = getLog()

    run(
      <server>
        <api title='Test'>
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      info: {
        title: 'Test',
        version: '0.0.0',
      },
      openapi: '3.1.0',
      paths: {},
    })
  })
  test('summary', () => {
    const [Log, fn] = getLog()

    run(
      <server>
        <api summary='my summary' title='Test'>
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      info: {
        summary: 'my summary',
        title: 'Test',
        version: '0.0.0',
      },
      openapi: '3.1.0',
      paths: {},
    })
  })
  test('description', () => {
    const [Log, fn] = getLog()

    run(
      <server>
        <api description='my description' title='Test'>
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      info: {
        description: 'my description',
        title: 'Test',
        version: '0.0.0',
      },
      openapi: '3.1.0',
      paths: {},
    })
  })
  test('version', () => {
    const [Log, fn] = getLog()

    run(
      <server>
        <api title='Test' version='0.0.1'>
          <Log />
        </api>
      </server>,
    )

    expect(fn).toBeCalledWith({
      info: {
        title: 'Test',
        version: '0.0.1',
      },
      openapi: '3.1.0',
      paths: {},
    })
  })
})
