import { Handler } from 'innet'
import { JSXElement } from '@innet/jsx'
import httpProxy from 'http-proxy'

import { CONTINUE } from '../../constants'
import { actionContext } from '../../hooks'

export interface ProxyProps {
  to: string
  secure?: boolean
}

export const proxyServer = httpProxy.createProxyServer({})

export function proxy ({ props: { to, secure = false } }: JSXElement<string, ProxyProps>, handler: Handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <proxy> inside <action>')
  }

  const { req, res } = action

  delete req.headers.host

  proxyServer.web(req, res, { target: to, secure })

  return CONTINUE
}
