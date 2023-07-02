import { Context, useContext } from '@innet/jsx'
import { ServerResponse } from 'http'

export const responseContext = new Context<ServerResponse>()

export function useResponse () {
  return useContext(responseContext)
}
