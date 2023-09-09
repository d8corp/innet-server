import { onDestroy } from 'watch-state'

import { useRequestPlugins } from '../useRequestPlugins'
import { type ServerRequest } from '../useServer'

export function useRequestPlugin (listener: ServerRequest) {
  const requests = useRequestPlugins()

  requests.add(listener)

  onDestroy(() => {
    requests.delete(listener)
  })
}
