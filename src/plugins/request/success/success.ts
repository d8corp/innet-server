import { HandlerPlugin } from 'innet'
import { useChildren, useProps } from '@innet/jsx'

import { useResponse } from '../../../hooks'

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

export const success: HandlerPlugin = () => {
  const children = useChildren()
  const props = useProps<SuccessProps>()
  const res = useResponse()
  const status = props?.status

  res.statusCode = typeof status === 'string' ? successStatuses[status] : status ?? (children ? 200 : 204)

  if (children) {
    res.write(JSON.stringify(children[0]))
  }

  res.end()
}
