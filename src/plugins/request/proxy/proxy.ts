import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { type IncomingMessage } from 'http'
import httpProxy from 'http-proxy'

import { useRequest, useResponse, useThrow } from '../../../hooks'

export interface ProxyProps {
  /**
   * Callback function executed when proxy receives a response.
   *
   * @example
   * ```tsx
   * <proxy
   *   to="https://api.example.com"
   *   onProxyRes={(res) => console.log('Proxy response:', res.statusCode)}
   * />
   * ```
   */
  onProxyRes?: (res: IncomingMessage) => void

  /**
   * Whether to verify SSL certificates.
   *
   * @default false
   *
   * @example
   * ```tsx
   * <proxy to="https://api.example.com" secure />
   * ```
   */
  secure?: boolean

  /**
   * Target URL to proxy requests to.
   *
   * @example
   * ```tsx
   * <proxy to="https://api.example.com" />
   * ```
   * @example
   * ```tsx
   * <proxy to="http://localhost:4000" />
   * ```
   */
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
