import { type ReturnFormatterType } from '../types'

import { type Formatter } from '../../../types'

export function optionalFormatter <
  F extends Formatter<any, any>,
> (format: F): <
  I,
>(val: I) => I extends undefined ? undefined : ReturnFormatterType<F, I> {
  return <I>(value: I) => value === undefined ? undefined : format(value)
}
