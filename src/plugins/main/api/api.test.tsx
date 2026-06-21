import { runTest } from '../../../testing'

describe('api', () => {
  it('Should return base OpenAPI', async () => {
    const stop = await runTest((onStart, onEnd) => (
      <server onClose={onEnd} onStart={onStart}>
        <api />
      </server>),
    )

    const res = await fetch('http://localhost')
    const json = await res.json()

    await stop()

    expect(json).toEqual({
      info: {
        title: '',
        version: '0.0.0',
      },
      openapi: '3.1.0',
      paths: {},
    })
  })
  describe('props', () => {
    describe('prefix', () => {
      it('Should use prefix', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart}>
            <api prefix='/api' />
          </server>),
        )

        const res = await fetch('http://localhost/api')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          info: {
            title: '',
            version: '0.0.0',
          },
          openapi: '3.1.0',
          paths: {},
        })
      })
    })
    describe('title', () => {
      it('Should return title', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart}>
            <api title='Test' />
          </server>),
        )

        const res = await fetch('http://localhost')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          info: {
            title: 'Test',
            version: '0.0.0',
          },
          openapi: '3.1.0',
          paths: {},
        })
      })
    })
    describe('version', () => {
      it('Should return version', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart}>
            <api version='1.0.0' />
          </server>),
        )

        const res = await fetch('http://localhost')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          info: {
            title: '',
            version: '1.0.0',
          },
          openapi: '3.1.0',
          paths: {},
        })
      })
    })
    describe('description', () => {
      it('Should return description', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart}>
            <api description='Test' />
          </server>),
        )

        const res = await fetch('http://localhost')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          info: {
            description: 'Test',
            title: '',
            version: '0.0.0',
          },
          openapi: '3.1.0',
          paths: {},
        })
      })
    })
    describe('summary', () => {
      it('Should return summary', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart}>
            <api summary='Test' />
          </server>),
        )

        const res = await fetch('http://localhost')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          info: {
            summary: 'Test',
            title: '',
            version: '0.0.0',
          },
          openapi: '3.1.0',
          paths: {},
        })
      })
    })
    describe('termsOfService', () => {
      it('Should return termsOfService', async () => {
        const stop = await runTest((onStart, onEnd) => (
          <server onClose={onEnd} onStart={onStart}>
            <api termsOfService='Test' />
          </server>),
        )

        const res = await fetch('http://localhost')
        const json = await res.json()

        await stop()

        expect(json).toEqual({
          info: {
            termsOfService: 'Test',
            title: '',
            version: '0.0.0',
          },
          openapi: '3.1.0',
          paths: {},
        })
      })
    })
  })
})
