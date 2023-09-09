import { useChildren, useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface BlacklistProps {
  ip?: string | string[]
}

export function blacklist () {
  const {
    ip = process.env.BLACKLIST_IP,
  } = useProps<BlacklistProps>() || {}
  const children = useChildren()

  const ips = typeof ip === 'string' ? ip.split(',') : ip as string[]

  useServerPlugin(() => {
    const action = useAction()

    if (!action.clientIp || ips?.includes(action.clientIp)) {
      return children
    }
  })
}
