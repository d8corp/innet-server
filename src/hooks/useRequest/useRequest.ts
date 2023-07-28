import { Context, useContext } from '@innet/jsx'
import { type IncomingMessage } from 'http'

export const requestContext = new Context<IncomingMessage>()

export function useRequest () {
  return useContext(requestContext)
}
