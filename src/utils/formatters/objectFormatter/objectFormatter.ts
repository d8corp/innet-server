import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

export function objectFormatter<
  M extends Record<string, Formatter<unknown, unknown>>,
> (map: M): <
  I extends Record<keyof M | string, unknown>,
>(value: I) => {
  [K in keyof M]: K extends keyof I ? ReturnFormatterType<M[K], [I[K]]> : undefined
} {
  return value => {
    const result = {} as any

    for (const key in map) {
      result[key] = map[key](value[key])
    }

    return result
  }
}
