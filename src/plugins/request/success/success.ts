import { type HandlerPlugin } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { useResponse } from '../../../hooks'
import { JSONString } from '../../../utils'

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
  type?: string
}

export const success: HandlerPlugin = () => {
  const children = useChildren()
  const { status, type } = useProps<SuccessProps>() || {}
  const res = useResponse()

  if (!res) {
    throw Error('<success> MUST be in <request>')
  }

  res.statusCode = typeof status === 'string' ? successStatuses[status] : status ?? ((children) ? 200 : 204)

  if (children?.[0]) {
    const child = children[0]
    const contentType = type || (
      ['string', 'number', 'boolean', 'bigint'].includes(typeof child)
        ? 'text/plain'
        : 'application/json'
    )

    res.setHeader('Content-Type', contentType)

    if (contentType === 'application/json') {
      res.write(JSONString(child))
    } else {
      res.write(String(child))
    }
  }

  res.end()
}
