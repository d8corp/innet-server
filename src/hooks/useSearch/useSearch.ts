import { useAction } from '../useAction'
import { useThrow } from '../useThrow'

export function useSearch <D> (): D {
  const action = useAction()

  if (!action) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  return action.search as D
}
