import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

export function optional <
  F extends Formatter<unknown, unknown>,
> (format: F): <I>(val: I) => I extends undefined ? undefined : ReturnFormatterType<F, I> {
  // @ts-expect-error: FIXME
  return <I>(value: I) => value === undefined ? undefined : format(value)
}
