import { Context, useContext } from '@innet/jsx'

export type Tags = string[]

export const tagsContext = new Context<Tags>([])

export function useTags () {
  return useContext(tagsContext)
}
