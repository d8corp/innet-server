import { useAction } from '../useAction'

export function useClientIp (): string | null {
  const action = useAction()

  return action.clientIp
}
