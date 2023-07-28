import innet, { type HandlerPlugin, useApp, useNewHandler } from 'innet'
import { type JSXElement } from '@innet/jsx'
import fs from 'fs'
import http, { type ServerResponse } from 'http'
import http2 from 'https'
import { onDestroy } from 'watch-state'

import { serverContext } from '../../../hooks'
import { type ServerStartParams, type SSL } from '../../../types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isInvalidPath = require('is-invalid-path')

export interface ServerProps {
  port?: number
  ssl?: SSL
  onStart?: (params: ServerStartParams) => any
  onRequest?: (req: Request, res: ServerResponse) => any
  onError?: (e: Error) => any
  onDestroy?: () => any
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

  if (!isInvalidPath(key)) {
    key = fs.readFileSync(key).toString()
  }
  if (!isInvalidPath(cert)) {
    cert = fs.readFileSync(cert).toString()
  }

  const https = Boolean(key && cert)
  const {
    port = Number(env.PORT ?? (https ? 442 : 80)),
    onStart,
    onError,
    onRequest,
  } = props

  const server = https ? http2.createServer({ key, cert }) : http.createServer()

  handler[serverContext.key] = { server, port }

  onDestroy(() => {
    props.onDestroy?.()
    server.close()
  })

  if (onError) {
    server.on('error', onError)
  }

  if (onRequest) {
    server.on('request', onRequest)
  }

  innet(children, handler)

  server.listen(port, () => {
    onStart?.({ port, https })
  })
}
