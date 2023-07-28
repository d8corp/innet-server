import { Context, useContext } from '@innet/jsx'

import { type Action } from '../../utils'

export const actionContext = new Context<Action>()

export function useAction (): Action {
  const action = useContext(actionContext)

  if (!action) {
    throw Error('`useAction` MUST be used in <request>')
  }

  return action
}
