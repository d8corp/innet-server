import { useAction } from '../useAction'

export function useCookies <D> (): D {
  return useAction().cookies as D
}
