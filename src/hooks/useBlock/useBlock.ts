import { useContext } from '@innet/jsx'

import { paramContext } from '../useParam'
import { useThrow } from '../useThrow'

import { type InParam } from '../../types'

export function useBlock (...placements: [InParam, ...InParam[]]) {
  const param = useContext(paramContext)

  if (param && placements.includes(param.props.in)) {
    useThrow(`<{type}> cannot be used in patch param <param in="${param?.props.in}">`)
  }
}
