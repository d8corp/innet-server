import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useResponse } from '../../../hooks'
import { JSONString } from '../../../utils'

export const successStatuses = {
  accepted: 202,
  alreadyReported: 208,
  created: 201,
  multiStatus: 207,
  noContent: 204,
  ok: 200,
  outside: 203,
  partialContent: 206,
  resetContent: 205,
} as const

export type SuccessStatuses = keyof typeof successStatuses

export interface SuccessProps {
  /**
   * Response data to send to the client.
   *
   * @example
   * ```tsx
   * <success>{{ id: 1, name: 'John' }}</success>
   * ```
   * @example
   * ```tsx
   * <success>Hello World</success>
   * ```
   */
  children?: any

  /**
   * HTTP status code for the response.
   *
   * @default 200 (ok) or 204 (noContent) if no body
   *
   * @example
   * ```tsx
   * <success status="created">{{ id: 1 }}</success>
   * ```
   * @example
   * ```tsx
   * <success status={201}>{{ id: 1 }}</success>
   * ```
   */
  status?: SuccessStatuses | number

  /**
   * Content-Type header for the response.
   *
   * @default auto-detected from body
   *
   * @example
   * ```tsx
   * <success type="text/html">
   *   {'<html><body>Hello</body></html>'}
   * </success>
   * ```
   */
  type?: string
}

export const success: HandlerPlugin = () => {
  const {
    children,
    status,
    type,
  } = useProps<SuccessProps>()
  const res = useResponse()

  if (!res) {
    throw Error('<success> MUST be in <request>')
  }

  res.statusCode = typeof status === 'string' ? successStatuses[status] : status ?? ((children) ? 200 : 204)

  if (children) {
    const child = children
    const contentType = type || (
      ['bigint', 'boolean', 'number', 'string'].includes(typeof child)
        ? 'text/plain; charset=utf-8'
        : 'application/json'
    )
    const content = contentType.startsWith('application/json') ? JSONString(child) : String(child)

    res.setHeader('Content-Type', contentType)
    res.setHeader('Content-Length', Buffer.byteLength(content))
    res.write(content, 'utf-8')
  }

  res.end()
}
