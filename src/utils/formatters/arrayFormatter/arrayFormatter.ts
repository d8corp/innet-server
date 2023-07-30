import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

type ReturnFormatterArrayType<
  F extends Formatter<any, any>,
  I extends readonly any[],
> = {
  [K in keyof I]: ReturnFormatterType<F, I[K]>;
}

export function arrayFormatter<
  F extends Formatter<any, any>,
> (format: F): <
  I
>(val: I) => I extends readonly any[] ? ReturnFormatterArrayType<F, I> : [] {
  // @ts-expect-error: FIXME
  return (value) => Array.isArray(value) ? value.map(format) : [] as const
}
