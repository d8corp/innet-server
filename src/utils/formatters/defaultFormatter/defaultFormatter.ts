import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

export function defaultFormatter <
  D,
  F extends Formatter<any, any>,
> (defaultValue: D | (() => D), format: F): <
  I,
>(val: I) => I extends undefined ? D : ReturnFormatterType<F, I> {
  return <I>(value: I) => value !== undefined
    ? format(value)
    : typeof defaultValue === 'function'
      // @ts-expect-error: FIXME
      ? defaultValue()
      : defaultValue
}
