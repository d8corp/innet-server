import { useChildren, useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface ProtectionProps {
  value?: string
  maxAge?: number
  excludeIp?: string | string[]
  cookieKey?: string
  searchKey?: string
}

export function protection () {
  const {
    maxAge = Number(process.env.INNET_PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60,
    value = process.env.INNET_PROTECTION,
    excludeIp = process.env.INNET_PROTECTED_IP,
    cookieKey = process.env.INNET_PROTECTION_COOKIE_KEY || 'protection',
    searchKey = process.env.INNET_PROTECTION_SEARCH_KEY || 'protection',
  } = useProps<ProtectionProps>() || {}
  const children = useChildren()

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
        maxAge,
        httpOnly: true,
        secure: true,
        path: '/',
      })

      return
    }

    action.setCookie(cookieKey)

    return children
  })
}
