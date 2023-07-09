import { Context, useContext } from '@innet/jsx'

export const headersContext = new Context({})

export function useHeaders () {
  return useContext(headersContext)
}
