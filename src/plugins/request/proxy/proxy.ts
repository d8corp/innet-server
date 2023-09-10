import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { type IncomingMessage } from 'http'
import httpProxy from 'http-proxy'

import { useRequest, useResponse, useThrow } from '../../../hooks'

export interface ProxyProps {
  to: string
  secure?: boolean
  onProxyRes?: (res: IncomingMessage) => void
}

export const proxy: HandlerPlugin = () => {
  const { to, secure = false, onProxyRes } = useProps<ProxyProps>()
  const req = useRequest()
  const res = useResponse()

  if (!req || !res) {
    useThrow('{type} MUST be in <request>')
  }

  const proxyServer = httpProxy.createProxyServer({})

  delete req.headers.host

  if (onProxyRes) {
    proxyServer.on('proxyRes', onProxyRes)
  }

  proxyServer.web(req, res, { target: to, secure })
}
