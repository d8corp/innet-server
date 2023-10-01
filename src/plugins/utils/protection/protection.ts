import { useChildren, useProps } from '@innet/jsx'

import { useAction, useServerPlugin } from '../../../hooks'

export interface ProtectionProps {
  cookieKey?: string
  excludeIp?: string | string[]
  maxAge?: number
  searchKey?: string
  value?: string
}

export function protection () {
  const {
    cookieKey = process.env.INNET_PROTECTION_COOKIE_KEY || 'protection',
    excludeIp = process.env.INNET_PROTECTED_IP,
    maxAge = Number(process.env.INNET_PROTECTION_MAX_AGE) || 365 * 24 * 60 * 60,
    searchKey = process.env.INNET_PROTECTION_SEARCH_KEY || 'protection',
    value = process.env.INNET_PROTECTION,
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
