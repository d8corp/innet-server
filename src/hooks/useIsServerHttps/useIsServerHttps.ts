import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

export const serverHttpsContext = new Context<boolean>()

export function useIsServerHttps () {
  const https = useContext(serverHttpsContext)

  if (https === undefined) {
    useThrow('{type} MUST BE in <server>')
  }

  return https
}
