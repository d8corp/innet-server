import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type Action } from '../../utils'

export const actionContext = new Context<Action>()

export function useAction (): Action {
  const action = useContext(actionContext)

  if (!action) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  return action
}
