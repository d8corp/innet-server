import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

type ReturnFormatterTupleType<T extends [...Formatter<any, any>[]], V extends [...any[]]> = {
  [I in keyof T]: I extends keyof V ? ReturnFormatterType<T[I], V[I]> : ReturnFormatterType<T[I], any>;
}

export function tupleFormatter<
  F extends Formatter<any, any>[],
> (formatters: F): <
  I
>(val: I) => I extends [...any[]] ? ReturnFormatterTupleType<F, I> : ReturnFormatterTupleType<F, []> {
  // @ts-expect-error: FIXME
  return (value) => Array.isArray(value) ? formatters.map((formatter, index) => formatter(value[index])) : formatters.map(formatter => formatter()) as const
}
