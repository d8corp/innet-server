import innet, { type HandlerPlugin, useApp, useNewHandler } from 'innet'
import { type JSXElement } from '@innet/jsx'
import fs from 'fs'
import http, { type IncomingMessage, type ServerResponse } from 'http'
import http2 from 'https'
import { onDestroy } from 'watch-state'

import {
  actionContext,
  requestHandlerContext,
  serverContext,
  serverHttpsContext,
  type ServerPlugin,
  serverPlugins,
  serverPortContext,
} from '../../../hooks'
import { type ServerStartParams, type SSL } from '../../../types'
import { Action } from '../../../utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isInvalidPath = require('is-invalid-path')

export interface ServerProps {
  onClose?: () => any
  onError?: (e: Error) => any
  onRequest?: (req: IncomingMessage, res: ServerResponse) => any
  onStart?: (params: ServerStartParams) => any
  port?: number
  ssl?: SSL
}

export const server: HandlerPlugin = () => {
  const handler = useNewHandler()
  const {
    children,
    props = {},
  } = useApp<JSXElement<string, ServerProps>>()
  const { env } = process
  let {
    ssl: {
      cert = env.INNET_SSL_CRT ?? 'localhost.crt',
      key = env.INNET_SSL_KEY ?? 'localhost.key',
    } = {},
  } = props

  try {
    if (!isInvalidPath(key)) {
      key = fs.readFileSync(key).toString()
    }
    if (!isInvalidPath(cert)) {
      cert = fs.readFileSync(cert).toString()
    }
  } catch {
    key = ''
    cert = ''
  }

  const https = Boolean(key && cert)
  const {
    onClose,
    onError,
    onRequest,
    onStart,
    port = Number(env.INNET_PORT ?? (https ? 442 : 80)),
  } = props
  const plugins = new Set<ServerPlugin>()

  const server = https ? http2.createServer({ cert, key }) : http.createServer()

  serverContext.set(handler, { port, server })
  serverPlugins.set(handler, plugins)
  serverPortContext.set(handler, port)
  serverHttpsContext.set(handler, https)

  onDestroy(() => {
    server.close()
  })

  if (onError) {
    server.on('error', onError)
  }

  if (onClose) {
    server.addListener('close', onClose)
  }

  server.on('request', (req, res) => {
    onRequest?.(req, res)
    const action = new Action(req, res)
    const requestHandler = Object.create(handler)
    actionContext.set(requestHandler, action)
    requestHandlerContext.set(requestHandler, requestHandler)

    async function server () {
      for (const plugin of plugins) {
        const result = await plugin()

        if (result !== undefined) {
          return result
        }
      }
    }

    innet({ props, type: server }, requestHandler)
  })

  innet(children, handler)

  server.listen(port, () => {
    onStart?.({ https, port })
  })
}
