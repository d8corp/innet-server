import { type Handler } from 'innet'
import { Context, useContext } from '@innet/jsx'
import { type Server as HttpServer } from 'http'
import { type Server as HttpsServer } from 'https'

import { useThrow } from '../useThrow'

import { type Action } from '../../utils'

export type ServerRequest = (action: Action, handler: Handler) => any

export interface ServerContext {
  server: HttpServer | HttpsServer
  port: number
}

export const serverContext = new Context<ServerContext>()

export function useServer () {
  const server = useContext(serverContext)

  if (!server) {
    useThrow('Use <{type}> in <server>')
  }

  return server
}
