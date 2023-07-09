import { useAction } from '../useAction'

export function useCookies <D> (): D {
  const action = useAction()

  if (!action) {
    throw Error('`useCookies` MUST be used in <request>')
  }

  return action.cookies
}
