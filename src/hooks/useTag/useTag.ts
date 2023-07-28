import { Context, useContext } from '@innet/jsx'

import { type TagObject } from '../../types'

export const tagContext = new Context<TagObject>()

export function useTag () {
  return useContext(tagContext)
}
