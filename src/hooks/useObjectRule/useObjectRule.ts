import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type ObjectOf } from '../../utils/rules'

export const objectRuleContext = new Context<ObjectOf, null>(null)

export function useObjectRule () {
  const map = useContext(objectRuleContext)

  if (!map) {
    useThrow('Use <{type}> inside <object>')
  }

  return map
}
