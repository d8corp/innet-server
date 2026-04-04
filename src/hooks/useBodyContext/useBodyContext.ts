import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

export interface BodyContext {
  useFile: () => void
}

export const bodyContext = new Context<BodyContext>()

export function useBodyContext () {
  const context = useContext(bodyContext)

  if (!context) {
    useThrow('<{type}> MUST be in <body>')
  }

  return context
}
