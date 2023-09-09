import { type HandlerPlugin } from 'innet'
import { useChildren } from '@innet/jsx'

import { useServerPlugin } from '../../../hooks'

export interface RequestProps {

}

export const request: HandlerPlugin = () => {
  const children = useChildren()
  useServerPlugin(() => children)
}
