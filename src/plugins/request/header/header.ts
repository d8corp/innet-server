import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useResponse, useThrow } from '../../../hooks'

export interface HeaderProps {
  name: string
  value: string
}

export const header: HandlerPlugin = () => {
  const res = useResponse()

  if (!res) {
    useThrow('<{type}> MUST be in <request> or <fallback>')
  }

  const { name, value } = useProps<HeaderProps>()

  res.setHeader(name, value)
}
