import innet, { HandlerPlugin, useHandler } from 'innet'
import { useChildren, useProps } from '@innet/jsx'
import { callHandler } from '@innet/utils'

import { useResponse } from '../../../hooks'

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

export interface RedirectProps {
  to: string
  encode?: boolean
  status?: number | keyof typeof redirectStatuses
}

function getStatus (status: number | string): number {
  if (typeof status === 'number') return status
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

  const handler = useHandler()
  const children = useChildren()
  const props = useProps()
  const { to, status = 301, encode }: RedirectProps = props

  res.writeHead(getStatus(status), {
    location: encode ? customEncode(to) : to,
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  })

  innet(children, handler)
  innet(() => res.end(), callHandler)
}
