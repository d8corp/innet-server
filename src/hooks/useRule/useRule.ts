import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type Rule } from '../../utils/rules'

export type RuleContext = (rule: Rule) => void

export const ruleContext = new Context<RuleContext, null>(null)

export function useSetRule () {
  const setFormatter = useContext(ruleContext)

  if (!setFormatter) {
    useThrow('Use <{type}> inside <endpoint>')
  }

  return setFormatter
}

export function useRule (rule: Rule) {
  useSetRule()(rule)
}
