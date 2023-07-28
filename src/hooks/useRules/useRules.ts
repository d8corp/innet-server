import { Context, useContext } from '@innet/jsx'

import { type EndpointRule } from '../../types'

export interface RulesContext {
  rules: EndpointRule[]
  key: string
  required: boolean
}

export const rulesContext = new Context<RulesContext>()

export function useRules () {
  return useContext(rulesContext)
}
