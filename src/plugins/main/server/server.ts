import innet, { type HandlerPlugin, useApp, useNewHandler } from 'innet'
import { type JSXElement } from '@innet/jsx'
import fs from 'fs'
import http, { type IncomingMessage, type ServerResponse } from 'http'
import http2 from 'https'
import { onDestroy } from 'watch-state'

import { actionContext, serverContext, type ServerPlugin, serverPlugins } from '../../../hooks'
import { type ServerStartParams, type SSL } from '../../../types'
import { Action } from '../../../utils'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isInvalidPath = require('is-invalid-path')

export interface ServerProps {
  port?: number
  ssl?: SSL
  onStart?: (params: ServerStartParams) => any
  onRequest?: (req: IncomingMessage, res: ServerResponse) => any
  onError?: (e: Error) => any
  onClose?: () => any
}

export const server: HandlerPlugin = () => {
  const handler = useNewHandler()
  const { props = {}, children } = useApp<JSXElement<string, ServerProps>>()
  const { env } = process
  let {
    ssl: {
      key = env.SSL_KEY ?? 'localhost.key',
      cert = env.SSL_CRT ?? 'localhost.crt',
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
    port = Number(env.PORT ?? (https ? 442 : 80)),
    onStart,
    onError,
    onRequest,
    onClose,
  } = props
  const plugins = new Set<ServerPlugin>()

  const server = https ? http2.createServer({ key, cert }) : http.createServer()

  serverContext.set(handler, { server, port })
  serverPlugins.set(handler, plugins)

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

    async function server () {
      for (const plugin of plugins) {
        const result = await plugin()

        if (result !== undefined) {
          return result
        }
      }
    }

    innet({ type: server, props }, requestHandler)
  })

  innet(children, handler)

  server.listen(port, () => {
    onStart?.({ port, https })
  })
}
