import { Context, useContext } from '@innet/jsx'

import { type ServerObject } from '../../types'

export interface HostContext {
  server: ServerObject
}

export const hostContext = new Context<HostContext>()

export function useHost () {
  const host = useContext(hostContext)

  if (!host) {
    throw Error('Use `useHost` in <host>')
  }

  return host
}
