const secretKey = Symbol('once')

export function once <This, Args extends any[], Result = unknown> (
  target: (this: This, ...args: Args) => Result,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Result>
)
export function once <This, Args extends any[]> (
  target: (this: This, value: Args[0]) => void,
  context: ClassSetterDecoratorContext<This, Args[0]>
)
export function once <This, Value> (
  value: () => Value,
  context: ClassGetterDecoratorContext<This, Value>,
)
export function once <This, Args extends any[], Result = unknown> (
  target: undefined,
  context: ClassFieldDecoratorContext<This, (...args: Args) => Result>
)
export function once <This, Args extends any[], Result = unknown> (
  target: ((this: This, ...args: Args) => Result) | ((this: This, value: Args[0]) => Result) | (() => Args) | undefined,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Result>
    | ClassSetterDecoratorContext<This, Args[0]>
    | ClassGetterDecoratorContext<This, Args>
    | ClassFieldDecoratorContext<This, (this: This, ...args: Args) => Result>,
) {
  return context.kind === 'field'
    ? function (fn: (this: This, ...args: Args) => Result) {
      let cache = secretKey

      return function () {
        if (cache !== secretKey) return cache

        return (cache = ('apply' in fn ? fn.apply(this, arguments) : (fn as any)(...arguments)))
      }
    }
    : function once (): Args {
      if (secretKey in this) {
        return this[secretKey]
      }

      return (this[secretKey] = target.apply(this, arguments))
    }
}
