import { ACTION, Action } from '../../action'

export interface RedirectProps {
  to: string
  status?: number | keyof typeof redirectStatuses
}

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

function getStatus (status: number | string): number {
  if (typeof status === 'number') return status
  return redirectStatuses[status] || 301
}

export function redirect ({ props, children }, handler) {
  const { res }: Action = handler[ACTION]
  const { to, status = 301 }: RedirectProps = props

  res.writeHead(getStatus(status), {
    location: to,
  })

  return null
}
