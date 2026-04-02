import { useAction } from '../useAction'
import { useEndpoint } from '../useEndpoint'
import { useThrow } from '../useThrow'

import { type ApiEndpoints, type TEndpoint } from '../../types'
import { type Action } from '../../utils'

export function useData<F extends Exclude<keyof TEndpoint, 'response'>, D extends keyof ApiEndpoints> (
  from: F,
  path?: D,
): ApiEndpoints[D][F] {
  if (path) {
    const endpoint = useEndpoint()
    const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`

    if (endpointKey !== path) {
      useThrow(`<{type}> MUST be in <endpoint> of ${path}`)
    }
  }

  const action = useAction()

  if (!action) {
    useThrow('<{type}> MUST be in <return> or <preset>')
  }

  return action[from as keyof Action] as ApiEndpoints[D][F]
}
