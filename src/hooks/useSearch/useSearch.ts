import { useAction } from '../useAction'

export function useSearch <D> (): D {
  const action = useAction()

  if (!action) {
    throw Error('`useSearch` MUST be used in <request>')
  }

  // @ts-expect-error: FIXME
  return action.search
}
