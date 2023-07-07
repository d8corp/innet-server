import { useApi } from '../useApi'
import { useOperation } from '../useOperation'

import { Endpoint } from '../../types'
import { mapEndpoints } from '../../utils'

export function useMapEndpoints (callback: (endpoint: Endpoint, dynamic: boolean) => void) {
  const operationContext = useOperation()

  if (!operationContext) {
    throw Error('`useMapEndpoints` MUST be used inside <endpoint>')
  }

  const { endpoints } = useApi()
  const { path, method } = operationContext

  if (!endpoints[method]) {
    endpoints[method] = { key: '' }
  }

  mapEndpoints(path, endpoints[method], callback)
}
