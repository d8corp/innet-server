import { getClientIp } from 'request-ip'

import { useRequest } from '../useRequest'
import { useThrow } from '../useThrow'

export function useClientIp (): string | null {
  const req = useRequest()

  if (!req) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  return getClientIp(req)
}
