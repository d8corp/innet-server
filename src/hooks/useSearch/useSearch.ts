import { useAction } from '../useAction'
import { useThrow } from '../useThrow'

export function useSearch <D> (): D {
  const action = useAction()

  if (!action) {
    useThrow('<{type}> MUST be in <return> or <preset>')
  }

  return action.search as D
}
