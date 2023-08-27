import { useAction } from '../useAction'

export function useBody <D> (): D {
  return useAction().body as D
}
