import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

export const bodyFileContext = new Context<() => void>()

export function useBodyFile () {
  const bodyFile = useContext(bodyFileContext)

  if (!bodyFile) {
    useThrow('<{type}> MUST be in <body>')
  }

  bodyFile()
}
