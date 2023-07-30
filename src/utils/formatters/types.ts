import { type Formatter } from '../../types'

export type ReturnFormatterType<
  F extends Formatter<any, any>,
  I extends Parameters<F>[number],
> = F extends (value: I) => infer O ? O : F extends (...a: any[]) => infer O ? O : unknown
