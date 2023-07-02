import { Context, useContext } from '@innet/jsx'

export const requestContext = new Context<Request>()

export function useRequest () {
  return useContext(requestContext)
}
