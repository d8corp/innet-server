import innet, { Handler } from 'innet'
import fs from 'fs'
import http from 'http'
import http2 from 'https'
import { onDestroy } from 'watch-state'

import { ACTION, Action, ActionParams } from '../action'
import { CONTINUE } from '../constants'
const isInvalidPath = require('is-invalid-path')

export interface SSL {
  cert: string
  key: string
}
export interface ServerProps {
  actionParams?: ActionParams
  port?: number
  ssl?: SSL
  unknownError?: string
  onStart?: (url: string) => any
  onRequest?: (action: Action) => any
  onError?: (e: Error, action?: Action) => any
  onDestroy?: () => any
}

export function server ({ props = {} as ServerProps, children }, handler: Handler) {
  const { env } = process
  let { ssl: { key = env.SSL_KEY, cert = env.SSL_CRT } = {}, actionParams } = props

  if (!isInvalidPath(key)) {
    key = fs.readFileSync(key).toString()
  }
  if (!isInvalidPath(cert)) {
    cert = fs.readFileSync(cert).toString()
  }

  const https = Boolean(key && cert)
  const { port = env.PORT || (https ? 442 : 80), unknownError = '', onStart, onError, onRequest } = props

  const server = https ? http2.createServer({ key, cert }) : http.createServer()
  onDestroy(() => {
    props.onDestroy?.()
    server.close()
  })

  server.on('request', async (req, res) => {
    const childHandler = Object.create(handler)

    childHandler[ACTION] = new Action(req, res, actionParams)

    if (onRequest) {
      await onRequest(childHandler[ACTION])
    }

    if (children) {
      try {
        const result = await innet(children, childHandler)

        if (result === CONTINUE) {
          return
        }

        if (typeof result === 'string') {
          res.write(result)
        }
      } catch (e) {
        res.statusCode = 520
        onError?.(e, childHandler[ACTION])
        res.write(unknownError)
      }
    }

    res.end()
  })

  let res, rej
  const promise = new Promise((resolve, reject) => {
    res = resolve
    rej = reject
  })

  server.on('error', e => {
    rej(e)
    onError?.(e)
  })

  server.listen(port, () => {
    const url = `http${https ? 's' : ''}://localhost:${port}`
    onStart?.(url)
    res(url)
  })

  return promise
}
