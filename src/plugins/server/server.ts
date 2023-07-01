import innet, { HandlerPlugin, useApp, useHandler } from 'innet'
import { JSXElement } from '@innet/jsx'
import fs from 'fs'
import http from 'http'
import http2 from 'https'
import { onDestroy } from 'watch-state'

import { serverContext } from '../../hooks'
import { Request, Response } from '../../utils'

const isInvalidPath = require('is-invalid-path')

export interface SSL {
  cert: string
  key: string
}

export interface ServerStartParams {
  port: number
  https: boolean
}

export interface ServerProps {
  port?: number
  ssl?: SSL
  onStart?: (params: ServerStartParams) => any
  onRequest?: (req: Request, res: Response) => any
  onError?: (e: Error) => any
  onDestroy?: () => any
}

export const server: HandlerPlugin = () => {
  const handler = useHandler()
  const { props = {}, children } = useApp<JSXElement<string, ServerProps>>()
  const { env } = process
  let { ssl: { key = env.SSL_KEY, cert = env.SSL_CRT } = {} } = props
  const childHandler = Object.create(handler)

  if (!isInvalidPath(key)) {
    key = fs.readFileSync(key).toString()
  }
  if (!isInvalidPath(cert)) {
    cert = fs.readFileSync(cert).toString()
  }

  const https = Boolean(key && cert)
  const {
    port = Number(env.PORT || (https ? 442 : 80)),
    onStart,
    onError,
    onRequest,
  } = props

  const server = https ? http2.createServer({ key, cert }) : http.createServer()

  childHandler[serverContext.key] = { server, port }

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

  innet(children, childHandler)

  server.listen(port, () => {
    onStart?.({ port, https })
  })
}
