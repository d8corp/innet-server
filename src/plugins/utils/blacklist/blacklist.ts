import { useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface BlacklistProps {
  /** Content to execute when IP is blocked */
  children?: any

  /**
   * Comma-separated list of IP addresses to block.
   *
   * @env INNET_BLACKLIST_IP
   *
   * @example
   * ```tsx
   * <blacklist ip="192.168.1.1,10.0.0.1">
   *   <error status="forbidden" />
   * </blacklist>
   * ```
   * @example
   * ```tsx
   * <blacklist ip={['192.168.1.1', '10.0.0.1']}>
   *   <error status="forbidden" />
   * </blacklist>
   * ```
   */
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
