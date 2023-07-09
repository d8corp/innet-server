import { Context, useContext } from '@innet/jsx'

import { Action } from '../../utils'

export const actionContext = new Context<Action>()

export function useAction () {
  const action = useContext(actionContext)

  if (!action) {
    throw Error('`useAction` MUST be used in <request>')
  }

  return action
}
