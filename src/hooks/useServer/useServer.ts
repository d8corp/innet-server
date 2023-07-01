import { Context, useContext } from '@innet/jsx'
import { type Server as HttpServer } from 'http'
import { type Server as HttpsServer } from 'https'

export interface ServerContext {
  server: HttpServer | HttpsServer
  port: number
}

export const serverContext = new Context<ServerContext>()

export function useServer () {
  const server = useContext(serverContext)

  if (!server) {
    throw Error('Use `useServer` in <server>')
  }

  return server
}
