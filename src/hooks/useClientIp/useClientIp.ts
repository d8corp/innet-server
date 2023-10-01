import { useAction } from '../useAction'

export function useClientIp (): null | string {
  const action = useAction()

  return action.clientIp
}
