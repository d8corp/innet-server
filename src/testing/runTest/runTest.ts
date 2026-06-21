import { innet } from 'innet'
import { Watch } from 'watch-state'

import { handler } from '../../handler'

export async function runTest (app: (onStart: (...a: any[]) => void, onEnd: (...a: any[]) => void) => any) {
  const {
    promise: start,
    resolve: onStart,
  } = Promise.withResolvers()

  const {
    promise: end,
    resolve: onEnd,
  } = Promise.withResolvers()

  const server = new Watch(() => {
    innet(app(onStart, onEnd), handler)
  })

  await start

  return async () => {
    server.destroy()

    await end
  }
}
