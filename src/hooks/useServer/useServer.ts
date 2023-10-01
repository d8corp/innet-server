import { Context, useContext } from '@innet/jsx'
import { type Server as HttpServer } from 'http'
import { type Server as HttpsServer } from 'https'

import { useThrow } from '../useThrow'

export type ServerPlugin = () => any

export interface ServerContext {
  port: number
  server: HttpServer | HttpsServer
}

export const serverContext = new Context<ServerContext>()

export function useServer () {
  const server = useContext(serverContext)

  if (!server) {
    useThrow('Use <{type}> in <server>')
  }

  return server
}
