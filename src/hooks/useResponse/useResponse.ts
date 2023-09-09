import { useAction } from '../useAction'

export function useResponse () {
  return useAction().res
}
