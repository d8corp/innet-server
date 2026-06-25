import { useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface ProtectionProps {
  /** Content to execute when protection check fails */
  children?: any

  /**
   * Cookie name for storing protection state.
   *
   * @default 'protection'
   * @env INNET_PROTECTION_COOKIE_KEY
   *
   * @example
   * ```tsx
   * <protection cookieKey="auth_token" value="secret123">
   *   <error status="forbidden" />
   * </protection>
   * ```
   */
  cookieKey?: string

  /**
   * Comma-separated list of IPs to exempt from protection.
   *
   * @env INNET_PROTECTED_IP
   *
   * @example
   * ```tsx
   * <protection value="secret123" excludeIp="127.0.0.1,::1">
   *   <error status="forbidden" />
   * </protection>
   * ```
   * @example
   * ```tsx
   * <protection value="secret123" excludeIp={['127.0.0.1', '::1']}>
   *   <error status="forbidden" />
   * </protection>
   * ```
   */
  excludeIp?: string | string[]

  /**
   * How long (in seconds) the protection is valid.
   *
   * @default 31536000 (1 year)
   * @env INNET_PROTECTION_MAX_AGE
   *
   * @example
   * ```tsx
   * <protection value="secret123" maxAge={86400}>
   *   <error status="forbidden" />
   * </protection>
   * ```
   */
  maxAge?: number

  /**
   * Query parameter name for checking protection.
   *
   * @default 'protection'
   * @env INNET_PROTECTION_SEARCH_KEY
   *
   * @example
   * ```tsx
   * <protection searchKey="token" value="secret123">
   *   <error status="forbidden" />
   * </protection>
   * ```
   */
  searchKey?: string

  /**
   * Secret value that clients must provide.
   *
   * @env INNET_PROTECTION
   *
   * @example
   * ```tsx
   * <protection value="secret123">
   *   <error status="forbidden" />
   * </protection>
   * ```
   */
  value?: string
}

export function protection () {
  const {
    children,
    cookieKey = process.env.INNET_PROTECTION_COOKIE_KEY || 'protection',
    excludeIp = process.env.INNET_PROTECTED_IP,
    maxAge = Number(process.env.INNET_PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60,
    searchKey = process.env.INNET_PROTECTION_SEARCH_KEY || 'protection',
    value = process.env.INNET_PROTECTION,
  } = useProps<ProtectionProps>()

  if (!value) return

  const excludeIps = Array.isArray(excludeIp) ? excludeIp : excludeIp?.split(',')

  useServerPlugin(() => {
    const action = useAction()

    if (!action.clientIp) return children
    if (excludeIps?.includes(action.clientIp)) return

    const { [cookieKey]: cookieProtection } = action.cookies

    if (cookieProtection && cookieProtection === value) return

    const { [searchKey]: searchProtection } = action.search

    if (searchProtection && searchProtection === value) {
      action.setCookie(cookieKey, value, {
        httpOnly: true,
        maxAge,
        path: '/',
        secure: true,
      })

      return
    }

    action.setCookie(cookieKey)

    return children
  })
}
