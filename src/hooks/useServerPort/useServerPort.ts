import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

export const serverPortContext = new Context<number>()

export function useServerPort () {
  const port = useContext(serverPortContext)

  if (!port) {
    useThrow('{type} MUST BE in <server>')
  }

  return port
}
