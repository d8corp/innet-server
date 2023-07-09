import { useAction } from '../useAction'

export function useHeaders <D> (): D {
  const action = useAction()

  if (!action) {
    throw Error('`useHeaders` MUST be used in <request>')
  }

  return action.headers
}
