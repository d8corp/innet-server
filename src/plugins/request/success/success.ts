import { type HandlerPlugin } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

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
  status?: SuccessStatuses | number
  type?: string
}

export const success: HandlerPlugin = () => {
  const children = useChildren()
  const {
    status,
    type,
  } = useProps<SuccessProps>() || {}
  const res = useResponse()

  if (!res) {
    throw Error('<success> MUST be in <request>')
  }

  res.statusCode = typeof status === 'string' ? successStatuses[status] : status ?? ((children) ? 200 : 204)

  if (children?.[0]) {
    const child = children[0]
    const contentType = type || (
      ['bigint', 'boolean', 'number', 'string'].includes(typeof child)
        ? 'text/plain'
        : 'application/json'
    )
    const content = contentType === 'application/json' ? JSONString(child) : String(child)

    res.setHeader('Content-Type', contentType)
    res.setHeader('Content-Length', content.length)

    if (contentType === 'application/json') {
      res.write(JSONString(child))
    } else {
      res.write(String(child))
    }
  }

  res.end()
}
