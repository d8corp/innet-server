export type ReturnFormatterType<
  F extends (value: any) => any,
  I extends Parameters<F>[0]
> = F extends (value: I) => infer O ? O : never
