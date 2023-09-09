import innet, { useHandler } from 'innet'
import { useChildren } from '@innet/jsx'

import { useServerPlugin } from '../../../hooks'

export interface PresetProps {}

export function preset () {
  const children = useChildren()

  useServerPlugin(() => {
    innet(children, useHandler())
  })
}
