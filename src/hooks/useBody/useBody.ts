import { useAction } from '../useAction'
import { useThrow } from '../useThrow'

export function useBody <D> (): D {
  const action = useAction()

  if (!action) {
    useThrow('<{type}> MUST be in <request>')
  }

  return action.body as D
}
