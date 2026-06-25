import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useHeaders, useResponse } from '../../../hooks'

export const redirectStatuses = {
  found: 302,
  movedPermanently: 301,
  multipleChoices: 300,
  notModified: 304,
  permanentRedirect: 308,
  seeOther: 303,
  temporaryRedirect: 307,
  useProxy: 305,
}

export type RedirectStatuses = keyof typeof redirectStatuses

export interface RedirectProps {
  /**
   * Whether to encode the URL.
   *
   * @default false
   *
   * @example
   * ```tsx
   * <redirect to="/path/with spaces" encode />
   * ```
   */
  encode?: boolean

  /**
   * HTTP redirect status code.
   *
   * @default 301 (movedPermanently)
   *
   * @example
   * ```tsx
   * <redirect to="/new-path" status="permanentRedirect" />
   * ```
   * @example
   * ```tsx
   * <redirect to="/temp-path" status={302} />
   * ```
   */
  status?: RedirectStatuses | number

  /**
   * Target URL to redirect to.
   *
   * @example
   * ```tsx
   * <redirect to="/new-location" />
   * ```
   * @example
   * ```tsx
   * <redirect to="https://example.com" status="movedPermanently" />
   * ```
   */
  to: string
}

function getStatus (status: number | string): number {
  if (typeof status === 'number') return status
  // @ts-expect-error: FIXME
  return redirectStatuses[status] || 301
}

function customEncode (url: string) {
  return encodeURI(url.replaceAll('%20', ' '))
}

export const redirect: HandlerPlugin = () => {
  const res = useResponse()

  if (!res) {
    throw Error('Use <redirect> inside <request>')
  }

  const headers = useHeaders()
  const props = useProps()
  const {
    encode,
    status = 301,
    to,
  }: RedirectProps = props

  res.writeHead(getStatus(status), {
    'Cache-Control': headers['Cache-Control'] ?? 'no-cache, no-store, must-revalidate',
    location: encode ? customEncode(to) : to,
  })

  res.end()
}
