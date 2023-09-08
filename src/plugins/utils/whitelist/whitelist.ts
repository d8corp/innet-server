import { useChildren, useProps } from '@innet/jsx'

import { useRequestPlugin } from '../../../hooks'

export interface WhitelistProps {
  ip?: string | string[]
}

export function whitelist () {
  const {
    ip = process.env.WHITELIST_IP,
  } = useProps<WhitelistProps>() || {}
  const children = useChildren()

  const ips = typeof ip === 'string' ? ip.split(',') : ip as string[]

  if (!ips) return

  useRequestPlugin(action => {
    if (!action.clientIp || !ips.includes(action.clientIp)) {
      return children
    }
  })
}
