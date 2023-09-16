import { type HandlerPlugin } from 'innet'
import { useChildren } from '@innet/jsx'

import { useServerPlugin } from '../../../hooks'

export interface ReturnProps {}

export const returnPlugin: HandlerPlugin = () => {
  const children = useChildren()
  useServerPlugin(() => children)
}
