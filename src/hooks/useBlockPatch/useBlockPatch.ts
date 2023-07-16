import { useContext } from '@innet/jsx'

import { paramContext } from '../useParam'
import { useThrow } from '../useThrow'

export function useBlockPatch () {
  const param = useContext(paramContext)

  if (param?.props.in === 'path') {
    useThrow('<{type}> cannot be used in patch param <param in="path">')
  }
}
