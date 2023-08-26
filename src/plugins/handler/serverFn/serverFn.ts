import innet, { type Plugin, useApp, useHandler } from 'innet'
import { Watch, type Watcher } from 'watch-state'

export const serverFn: Plugin = () => {
  return () => {
    const handler = useHandler()
    const fn = useApp<Watcher<any>>()
    new Watch(update => {
      innet(fn(update), handler)
    })
  }
}
