import { onDestroy } from 'watch-state'

import { type ServerPlugin } from '../useServer'
import { useServerPlugins } from '../useServerPlugins'

export function useServerPlugin (listener: ServerPlugin) {
  const requests = useServerPlugins()

  requests.add(listener)

  onDestroy(() => {
    requests.delete(listener)
  })
}
