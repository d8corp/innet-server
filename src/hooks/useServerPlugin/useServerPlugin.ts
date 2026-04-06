import { useHandler } from 'innet'
import { onDestroy } from 'watch-state'

import { type ServerPlugin } from '../useServer'
import { useServerPlugins } from '../useServerPlugins'

export function useServerPlugin (listener: ServerPlugin) {
  const plugins = useServerPlugins()

  plugins.set(listener, useHandler())

  onDestroy(() => {
    plugins.delete(listener)
  })
}
