import { Context, useContext } from '@innet/jsx'

export const paramsContext = new Context({})

export function useParams () {
  return useContext(paramsContext)
}
