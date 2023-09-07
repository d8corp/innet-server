import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useHeaders, useResponse } from '../../../hooks'

export const redirectStatuses = {
  multipleChoices: 300,
  movedPermanently: 301,
  found: 302,
  seeOther: 303,
  notModified: 304,
  useProxy: 305,
  temporaryRedirect: 307,
  permanentRedirect: 308,
}

export type RedirectStatuses = keyof typeof redirectStatuses

export interface RedirectProps {
  to: string
  encode?: boolean
  status?: number | RedirectStatuses
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
  const { to, status = 301, encode }: RedirectProps = props

  res.writeHead(getStatus(status), {
    location: encode ? customEncode(to) : to,
    'Cache-Control': headers['Cache-Control'] ?? 'no-cache, no-store, must-revalidate',
  })

  res.end()
}
