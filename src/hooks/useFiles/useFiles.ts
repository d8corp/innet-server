import { useAction } from '../useAction'

export function useFiles<T> (): T {
  return useAction().files as T
}
