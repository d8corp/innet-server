import { useChildren, useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface WhitelistProps {
  ip?: string | string[]
}

export function whitelist () {
  const {
    ip = process.env.INNET_WHITELIST_IP,
  } = useProps<WhitelistProps>() || {}
  const children = useChildren()

  const ips = typeof ip === 'string' ? ip.split(',') : ip as string[]

  if (!ips) return

  useServerPlugin(() => {
    const action = useAction()

    if (!action.clientIp || !ips.includes(action.clientIp)) {
      return children
    }
  })
}
