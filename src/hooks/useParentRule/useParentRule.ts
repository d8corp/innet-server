import { Context, useContext } from '@innet/jsx'

import { optional, type SetRule } from '../../utils'

export const parentRuleContext =
  new Context<SetRule, SetRule>(rule => optional(rule))

export function useParentRule (): SetRule {
  return useContext(parentRuleContext)
}
