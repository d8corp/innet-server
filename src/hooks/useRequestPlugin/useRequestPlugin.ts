import { onDestroy } from 'watch-state'

import { useApi } from '../useApi'

import { type RequestPlugin } from '../../types'

export function useRequestPlugin (listener: RequestPlugin) {
  const { requestPlugins } = useApi()

  requestPlugins.add(listener)

  onDestroy(() => {
    requestPlugins.delete(listener)
  })
}
