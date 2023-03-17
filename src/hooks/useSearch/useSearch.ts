import { useAction } from '../useAction'

export function useSearch <D> (): D {
  return useAction().search as unknown as D
}
