import { useAction } from '../useAction'

export function useHeaders <D extends Record<string, any>> (): D {
  const action = useAction()

  if (!action) {
    throw Error('`useHeaders` MUST be used in <request>')
  }

  // @ts-expect-error: FIXME
  return action.headers
}
