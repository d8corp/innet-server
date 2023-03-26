import { useAction } from '../useAction'

import { Cookies } from '../../utils'

export function useCookies<T extends Cookies> (): T {
  return useAction().cookies as T
}
