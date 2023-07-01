import { Context, useContext } from '@innet/jsx'
import { OpenAPIV3_1 as OpenApi } from 'openapi-types'

export interface StandContext {
  server: OpenApi.ServerObject
}

export const standContext = new Context<StandContext>()

export function useStand () {
  const stand = useContext(standContext)

  if (!stand) {
    throw Error('Use `useStand` in <stand>')
  }

  return stand
}
