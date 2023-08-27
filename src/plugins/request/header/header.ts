import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useResponse, useThrow } from '../../../hooks'

export interface HeaderProps {
  key: string
  value: string
}

export const header: HandlerPlugin = () => {
  const res = useResponse()

  if (!res) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  const { key, value } = useProps<HeaderProps>()

  res.setHeader(key, value)
}
