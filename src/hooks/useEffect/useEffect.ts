import innet from 'innet'
import { callHandler } from '@innet/utils'

import { type Effect } from '../../types'

export function useEffect (effect: Effect) {
  innet(effect, callHandler, 1)
}
