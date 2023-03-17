import { useAction } from '../useAction'

export function useBody<T> (): T {
  return useAction().body as T
}
