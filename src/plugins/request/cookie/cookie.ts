import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'
import { type Cookies } from 'cookie'

import { useAction } from '../../../hooks'

export interface CookieProps extends Cookies {
  /**
   * Cookie name.
   *
   * @example
   * ```tsx
   * <cookie key="sessionId" value="abc123" />
   * ```
   */
  key: string

  /**
   * Cookie value. Leave empty to delete the cookie.
   *
   * @example
   * ```tsx
   * <cookie
   *   key="sessionId"
   *   value="abc123"
   *   httpOnly
   *   secure
   *   sameSite
   *   maxAge={86400}
   * />
   * ```
   * @example
   * ```tsx
   * <cookie key="sessionId" />
   * ```
   */
  value?: string
}

export const cookie: HandlerPlugin = () => {
  const action = useAction()
  const {
    key,
    value,
    ...opt
  } = useProps<CookieProps>()

  action.setCookie(key, value, opt)
}
