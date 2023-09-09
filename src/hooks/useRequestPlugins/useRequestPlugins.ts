import { Context, useContext } from '@innet/jsx'

import { type ServerRequest } from '../useServer'
import { useThrow } from '../useThrow'

export const requestPlugins = new Context<Set<ServerRequest>>()

export function useRequestPlugins (): Set<ServerRequest> {
  const result = useContext(requestPlugins)

  if (!result) {
    useThrow('Use <{type}> in <server>')
  }

  return result
}
