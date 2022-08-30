import { Handler } from 'innet'
import httpProxy from 'http-proxy'

import { ACTION, Action } from '../../action'
import { CONTINUE } from '../../constants'

export interface ProxyProps {
  to: string
}

const proxyServer = httpProxy.createProxyServer({})

export function proxy ({ props: { to, secure = false } }, handler: Handler) {
  const { req, res }: Action = handler[ACTION]

  delete req.headers.host

  proxyServer.web(req, res, { target: to, secure })

  return CONTINUE
}
