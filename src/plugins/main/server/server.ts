import { type Handler, type HandlerPlugin, innet, net, useApp, useNewHandler } from 'innet'
import { useProps } from '@innet/jsx'
import fs from 'fs'
import http, { type IncomingMessage, type ServerResponse } from 'http'
import http2 from 'https'
import { onDestroy } from 'watch-state'

import { type ApiProps } from '../api'

import {
  actionContext,
  type ServerContext,
  serverContext,
  serverHttpsContext,
  type ServerPlugin,
  serverPlugins,
  serverPortContext,
  useApi,
} from '../../../hooks'
import { type ServerStartParams, type SSL } from '../../../types'
import { Action } from '../../../utils'
import { type UiProps } from '../../utils'

export interface ServerProps {
  children?: any
  formatError?: (target: { data: any, error: string }) => string
  onClose?: () => any
  onError?: (e: Error) => any
  onRequest?: (req: IncomingMessage, res: ServerResponse) => any
  onStart?: (params: ServerStartParams) => any
  port?: number
  ssl?: SSL
}

export const server: HandlerPlugin = () => {
  const handler = useNewHandler()
  const props = useProps<ServerProps>()
  const { env } = process

  let {
    ssl: {
      cert = env.INNET_SSL_CRT ?? 'localhost.crt',
      key = env.INNET_SSL_KEY ?? 'localhost.key',
    } = {},
  } = props

  try {
    if (!key.startsWith('-----BEGIN PRIVATE KEY-----')) {
      key = fs.readFileSync(key).toString()
    }
    if (!cert.startsWith('-----BEGIN CERTIFICATE-----')) {
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
    port = Number(env.INNET_PORT ?? (https ? 443 : 80)),
  } = props
  const plugins = new Map<ServerPlugin, Handler>()
  const apiPaths: string[] = []

  const server = https ? http2.createServer({ cert, key }) : http.createServer()

  const context: ServerContext = {
    initAPI: (props: ApiProps) => {
      apiPaths.push(props.prefix || '')
    },
    initUI: (props: UiProps) => {
      const { prefix } = useApi()

      apiPaths.push(`${prefix}${props.path ?? (process.env.INNET_UI_PATH || '/ui')}`)
    },
    port,
    props,
    server,
  }

  serverContext.set(handler, context)
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

    async function server () {
      const app = useApp()

      for (const [plugin, handler] of plugins) {
        const actionHandler = Object.create(handler)
        actionContext.set(actionHandler, action)
        const result = await net(plugin, app, actionHandler)

        if (result !== undefined) {
          return result
        }
      }
    }

    innet({ props, type: server }, requestHandler)
  })

  innet(props.children, handler)

  server.listen(port, () => {
    onStart?.({ apiPaths, https, port })
  })
}
