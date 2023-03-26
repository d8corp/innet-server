import { Context, useContext } from '@innet/jsx'

import { type Action, type ActionOptions } from '../../utils'

export const actionContext = new Context<Action, undefined>()

export function useAction<T extends Partial<ActionOptions>, O extends ActionOptions = ActionOptions & T> (): Action<O> {
  const action = useContext(actionContext) as Action<O>

  if (!action) {
    throw Error('Use `useAction` in <action>')
  }

  return action
}
