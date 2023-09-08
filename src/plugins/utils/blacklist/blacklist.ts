import { useChildren, useProps } from '@innet/jsx'

import { useRequestPlugin } from '../../../hooks'

export interface BlacklistProps {
  ip?: string | string[]
}

export function blacklist () {
  const {
    ip = process.env.BLACKLIST_IP,
  } = useProps<BlacklistProps>() || {}
  const children = useChildren()

  const ips = typeof ip === 'string' ? ip.split(',') : ip as string[]

  useRequestPlugin(action => {
    console.log(action.clientIp)
    if (!action.clientIp || ips?.includes(action.clientIp)) {
      return children
    }
  })
}
