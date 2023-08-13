import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

export type ObjectFormatterMap = Record<string, Formatter<any, any>>

export function objectFormatter<
  M extends ObjectFormatterMap,
> (map: M): <
  I extends Record<keyof M | string, any>,
>(value: I) => {
  [K in keyof M]: ReturnFormatterType<M[K], I[K]>
} {
  return value => {
    const result = {} as any

    for (const key in map) {
      result[key] = map[key](value?.[key])
    }

    return result
  }
}
