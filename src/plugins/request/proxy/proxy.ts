import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { type IncomingMessage } from 'http'
import httpProxy from 'http-proxy'

import { useRequest, useResponse, useThrow } from '../../../hooks'

export interface ProxyProps {
  onProxyRes?: (res: IncomingMessage) => void
  secure?: boolean
  to: string
}

export const proxy: HandlerPlugin = () => {
  const {
    onProxyRes,
    secure = false,
    to,
  } = useProps<ProxyProps>()
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

  proxyServer.web(req, res, { secure, target: to })
}
