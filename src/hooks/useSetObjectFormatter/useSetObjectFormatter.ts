import { Context, useContext } from '@innet/jsx'

import { useThrow } from '../useThrow'

import { type Formatter } from '../../types'
import { type ObjectFormatterMap } from '../../utils'

export const objectFormatterContext = new Context<ObjectFormatterMap, null>(null)

export type SetObjectFormatter = (map: Record<string, Formatter<any, any>>) => void

export function useSetObjectFormatter (): SetObjectFormatter {
  const objectFormatter = useContext(objectFormatterContext)

  if (!objectFormatter) {
    useThrow('Use <{type}> inside <object>')
  }

  return map => {
    Object.assign(objectFormatter, map)
  }
}
