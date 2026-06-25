import { type HandlerPlugin } from 'innet'
import { useProps } from '@innet/jsx'

import { useResponse, useThrow } from '../../../hooks'

export interface HeaderProps {
  /**
   * Header name.
   *
   * @example
   * ```tsx
   * <header key="Cache-Control" value="no-cache" />
   * ```
   */
  key: string

  /**
   * Header value.
   *
   * @example
   * ```tsx
   * <header key="Cache-Control" value="no-cache" />
   * ```
   */
  value: string
}

export const header: HandlerPlugin = () => {
  const res = useResponse()

  if (!res) {
    useThrow('<{type}> MUST be in <return> or <preset>')
  }

  const {
    key,
    value,
  } = useProps<HeaderProps>()

  res.setHeader(key, value)
}
