import innet from 'innet'

import { actionContext } from '../../hooks'

export const successStatuses = {
  ok: 200,
  created: 201,
  accepted: 202,
  outside: 203,
  noContent: 204,
  resetContent: 205,
  partialContent: 206,
  multiStatus: 207,
  alreadyReported: 208,
} as const

export type SuccessStatuses = keyof typeof successStatuses

export interface SuccessProps {
  status?: SuccessStatuses | number
}

export function success ({ props, children }, handler) {
  const action = actionContext.get(handler)

  if (!action) {
    throw Error('Use <success> inside <action>')
  }

  const status = props?.status

  action.res.statusCode = status
    ? successStatuses[status] || status
    : children
      ? 200
      : 204

  const data = innet(children, handler)

  if (typeof data === 'object') {
    return JSON.stringify(data)
  }

  return data ?? null
}
