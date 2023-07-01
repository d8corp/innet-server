import { Context, useContext } from '@innet/jsx'

import { ServerObject } from '../../types'

export interface StandContext {
  server: ServerObject
}

export const standContext = new Context<StandContext>()

export function useStand () {
  const stand = useContext(standContext)

  if (!stand) {
    throw Error('Use `useStand` in <stand>')
  }

  return stand
}
