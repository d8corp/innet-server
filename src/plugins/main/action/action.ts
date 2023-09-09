import { useChildren } from '@innet/jsx'

import { useRequestPlugin } from '../../../hooks'

export interface ActionProps {

}

export function action () {
  const children = useChildren()
  useRequestPlugin(() => children)
}
