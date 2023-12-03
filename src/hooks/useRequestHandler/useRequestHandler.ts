import { type Handler } from 'innet'
import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

export const requestHandlerContext = new Context<Handler>()

export function useRequestHandler () {
  const handler = useContext(requestHandlerContext)

  if (!handler) {
    useThrow('You cannot use useRequestHandler inside {type}, this hook can be used only in a request component')
  }

  return handler
}
