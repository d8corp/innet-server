import { useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface WhitelistProps {
  /** Content to execute when IP is not in whitelist */
  children?: any

  /**
   * Comma-separated list of IP addresses to allow.
   *
   * @env INNET_WHITELIST_IP
   *
   * @example
   * ```tsx
   * <whitelist ip="192.168.1.1,10.0.0.1">
   *   <error status="forbidden" />
   * </whitelist>
   * ```
   * @example
   * ```tsx
   * <whitelist ip={['192.168.1.1', '10.0.0.1']}>
   *   <error status="forbidden" />
   * </whitelist>
   * ```
   */
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
