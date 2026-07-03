import { innet, type Plugin, useApp, useHandler } from 'innet'
import { type Reaction, Watch } from 'watch-state'

export const serverFn: Plugin = () => {
  return () => {
    const handler = useHandler()
    const fn = useApp<Reaction<any>>()

    new Watch(() => {
      innet(fn(), handler)
    })
  }
}
