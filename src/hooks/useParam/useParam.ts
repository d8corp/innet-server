import { Context, useContext } from '@innet/jsx'

export const paramContext = new Context(false)

export function useParam () {
  return useContext(paramContext)
}
