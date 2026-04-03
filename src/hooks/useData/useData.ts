import { useContext } from '@innet/jsx'

import { useAction } from '../useAction'
import { useEndpoint } from '../useEndpoint'
import { paramsContext } from '../useParams'
import { useThrow } from '../useThrow'

import { type ApiEndpoints, type TEndpoint } from '../../types'
import { type Action } from '../../utils'

type KeysWithField<F extends string> = {
  [K in keyof ApiEndpoints]: F extends keyof ApiEndpoints[K] ? K : never
}[keyof ApiEndpoints]

export function useData<
  F extends Exclude<keyof TEndpoint, 'response'>,
  K extends KeysWithField<F> = KeysWithField<F>,
  T extends boolean = false
> (
  from: F,
  path?: K,
  preventThrow?: T,
): T extends true ? ApiEndpoints[K][F] | undefined : ApiEndpoints[K][F] {
  if (path) {
    const endpoint = useEndpoint()
    const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`

    if (endpointKey !== path) {
      if (preventThrow) {
        return undefined as T extends true ? ApiEndpoints[K][F] | undefined : ApiEndpoints[K][F]
      } else {
        useThrow(`<{type}> MUST be in <endpoint> of ${path as string}`)
      }
    }
  }

  const action = useAction()

  if (!action) {
    useThrow('<{type}> MUST be in <return> or <preset>')
  }

  if (from === 'params') {
    return useContext(paramsContext)
  }

  return action[from as keyof Action] as any
}
