import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type EndpointProps } from '../../plugins'
import type { Endpoint, OperationObject } from '../../types'

export interface EndpointContext {
  operation: OperationObject
  props: EndpointProps
  endpoint: Endpoint
}

export const endpointContext = new Context<EndpointContext>()

export function useEndpoint () {
  const endpoint = useContext(endpointContext)

  if (!endpoint) {
    useThrow('Use <{type}> in <endpoint>')
  }

  return endpoint
}
