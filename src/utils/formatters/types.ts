import { type Formatter } from '../../types'

export type ReturnFormatterType<
  F extends Formatter<any, any>,
  I extends Parameters<F>[number],
> = F extends Formatter<I, infer O> ? O : F extends (v: infer I1) => infer O ? O : never
