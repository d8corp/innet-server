import { type IncomingHttpHeaders } from 'http'

import { useAction } from '../useAction'

export function useHeaders <D extends IncomingHttpHeaders> (): D {
  return useAction().headers as D
}
