import { useContext } from '@innet/jsx'

import { useAction } from '../useAction'
import { useEndpoint } from '../useEndpoint'
import { paramsContext } from '../useParams'
import { useThrow } from '../useThrow'

import { type ApiEndpoints, type TEndpoint } from '../../types'
import { type Action } from '../../utils'

type EndpointsWithField<Api, F extends string> = {
  [K in keyof Api]: Api[K] extends { [K2 in F]: any } ? K : never
}[keyof Api]

export function useData<
  F extends Exclude<keyof TEndpoint, 'response'>,
  D extends EndpointsWithField<ApiEndpoints, F> = EndpointsWithField<ApiEndpoints, F>
> (
  from: F,
  path?: D,
): ApiEndpoints[D][F] {
  if (path) {
    const endpoint = useEndpoint()
    const endpointKey = `${endpoint.props.method.toUpperCase()}:${endpoint.props.path}`

    if (endpointKey !== path) {
      useThrow(`<{type}> MUST be in <endpoint> of ${path as string}`)
    }
  }

  const action = useAction()

  if (!action) {
    useThrow('<{type}> MUST be in <return> or <preset>')
  }

  if (from === 'params') {
    return useContext(paramsContext)
  }

  return action[from as keyof Action] as ApiEndpoints[D][F]
}
