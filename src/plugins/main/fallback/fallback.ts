import { HandlerPlugin, useHandler } from 'innet'
import { useChildren } from '@innet/jsx'

import { useApi } from '../../../hooks'

export interface FallbackProps {

}

export const fallback: HandlerPlugin = () => {
  const api = useApi()

  if (!api) {
    throw Error('Use <fallback> inside <api>')
  }

  if (api.fallback) {
    throw Error('<fallback> MUST be used once on an <api>')
  }

  const children = useChildren()
  const handler = useHandler()

  api.fallback = { children, handler }
}
