import { useAction } from '../useAction'

export function useRequest () {
  return useAction().req
}
