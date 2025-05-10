import { useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface WhitelistProps {
  children?: any
  ip?: string | string[]
}

export function whitelist () {
  const {
    children,
    ip = process.env.INNET_WHITELIST_IP,
  } = useProps<WhitelistProps>()

  const ips = typeof ip === 'string' ? ip.split(',') : ip as string[]

  if (!ips) return

  useServerPlugin(() => {
    const action = useAction()

    if (!action.clientIp || !ips.includes(action.clientIp)) {
      return children
    }
  })
}
