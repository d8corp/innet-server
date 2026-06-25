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

export type ServerFormatError = (target: { data: any, error: string }) => string

export interface ServerProps {
  /** Server content including routes, APIs, and configurations */
  children?: any

  /**
   * Custom function to format error responses.
   * Allows you to customize the JSON structure returned to clients when an error occurs.
   *
   * @example
   * ```tsx
   * <server formatError={({ error, data }) => JSON.stringify({ err: error, data })}>
   *   <return>
   *     <error />
   *   </return>
   * </server>
   * ```
   */
  formatError?: ServerFormatError

  /**
   * Callback function executed when the server closes.
   *
   * @example
   * ```tsx
   * <server onClose={() => console.log('Server closed')} />
   * ```
   */
  onClose?: () => any

  /**
   * Callback function executed when a request error occurs.
   *
   * @example
   * ```tsx
   * <server onError={(error) => console.error(error)} />
   * ```
   */
  onError?: (e: Error) => any

  /**
   * Callback function executed for every request.
   *
   * @example
   * ```tsx
   * <server onRequest={(req, res) => console.log(req.url)} />
   * ```
   */
  onRequest?: (req: IncomingMessage, res: ServerResponse) => any

  /**
   * Callback function executed when the server starts.
   *
   * @example
   * ```tsx
   * import { httpOnStart } from '@innet/server'
   *
   * export default <server onStart={httpOnStart} />
   * ```
   */
  onStart?: (params: ServerStartParams) => any

  /**
   * Server port.
   *
   * By default, uses port `80` for HTTP and `443` for HTTPS.
   * HTTPS mode is automatically enabled when SSL certificates are provided via the `ssl` parameter.
   *
   * @default 80 (HTTP) or 443 (HTTPS)
   * @env INNET_PORT
   *
   * @example
   * ```tsx
   * <server port={3000} />
   * ```
   */
  port?: number

  /**
   * SSL certificates configuration for HTTPS.
   *
   * The framework automatically detects whether the provided strings are file paths or certificate contents.
   * If the string starts with `-----BEGIN CERTIFICATE-----` or `-----BEGIN PRIVATE KEY-----`, it's treated as direct content.
   * Otherwise, it's treated as a file path and the content is read from disk.
   *
   * @default { cert: 'localhost.crt', key: 'localhost.key' }
   * @env INNET_SSL_CRT, INNET_SSL_KEY
   *
   * @example
   * ```tsx
   * <server ssl={{ cert: './localhost.crt', key: './localhost.key' }} />
   * ```
   * @example
   * ```tsx
   * <server ssl={{
   *   cert: '-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----',
   *   key: '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
   * }} />
   * ```
   */
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
