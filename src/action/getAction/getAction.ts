import { Handler } from 'innet'

import { Action, ACTION, ActionOptions } from '../Action'

export function getAction<O extends ActionOptions> (handler: Handler): Action<O> {
  return handler[ACTION]
}
