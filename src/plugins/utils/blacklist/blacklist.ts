import { useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface BlacklistProps {
  children?: any
  ip?: string | string[]
}

export function blacklist () {
  const {
    children,
    ip = process.env.INNET_BLACKLIST_IP,
  } = useProps<BlacklistProps>() || {}

  const ips = typeof ip === 'string' ? ip.split(',') : ip as string[]

  useServerPlugin(() => {
    const action = useAction()

    if (!action.clientIp || ips?.includes(action.clientIp)) {
      return children
    }
  })
}
