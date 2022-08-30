import innet, { PluginHandler } from 'innet'
import { Watch } from 'watch-state'

export function serverFn (): PluginHandler {
  return (fn, next, handler) => {
    let result

    new Watch(update => (result = innet(fn(update), handler)))

    return result
  }
}
