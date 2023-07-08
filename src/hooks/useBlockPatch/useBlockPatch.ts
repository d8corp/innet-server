import { useApp } from 'innet'
import { JSXElement, useContext } from '@innet/jsx'

import { paramContext } from '../useParam'

export function useBlockPatch () {
  const param = useContext(paramContext)

  if (param?.props.in === 'path') {
    const { type } = useApp<JSXElement>()
    throw Error(`<${type}> cannot be used in patch param <param in="path">`)
  }
}
