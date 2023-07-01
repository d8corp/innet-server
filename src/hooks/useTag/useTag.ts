import { Context, useContext } from '@innet/jsx'

import { TagObject } from '../../types'

export const tagContext = new Context<TagObject>()

export function useTag () {
  return useContext(tagContext)
}
