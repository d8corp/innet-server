import { useHandler } from '@innet/jsx'

import { ACTION, Action, ActionOptions } from '../../action'

export function useAction<T extends Partial<ActionOptions>, O extends ActionOptions = ActionOptions & T> (): Action<O> {
  return useHandler()[ACTION]
}
