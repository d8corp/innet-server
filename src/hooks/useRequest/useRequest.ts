import { Context, useContext } from '@innet/jsx'
import http from 'http'

export const requestContext = new Context<http.IncomingMessage>()

export function useRequest () {
  return useContext(requestContext)
}
