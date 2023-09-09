import { useChildren } from '@innet/jsx'

import { useServerPlugin } from '../../../hooks'

export interface ActionProps {}

export function action () {
  const children = useChildren()
  useServerPlugin(() => children)
}
