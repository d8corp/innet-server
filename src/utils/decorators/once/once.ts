const secretKey = Symbol('once')

function getCacheObject (target: object) {
  // @ts-expect-error: FIXME
  return target[secretKey] || (target[secretKey] = {})
}

export function once <This, Args extends any[], Result = unknown> (
  target: (this: This, ...args: Args) => Result,
  context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Result>
): any
export function once <This, Args extends any[]> (
  target: (this: This, value: Args[0]) => void,
  context: ClassSetterDecoratorContext<This, Args[0]>
): any
export function once <This, Value> (
  value: () => Value,
  context: ClassGetterDecoratorContext<This, Value>,
): any
export function once <This, Args extends any[], Result = unknown> (
  target: undefined,
  context: ClassFieldDecoratorContext<This, (...args: Args) => Result>
): any
export function once <This, Args extends any[], Result = unknown> (
  target: (() => Args) | ((this: This, ...args: Args) => Result) | ((this: This, value: Args[0]) => Result) | undefined,
  context: ClassFieldDecoratorContext<This, (this: This, ...args: Args) => Result>
  | ClassGetterDecoratorContext<This, Args>
  | ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Result>
  | ClassSetterDecoratorContext<This, Args[0]>,
) {
  return context.kind === 'field'
    ? function (fn: (this: This, ...args: Args) => Result) {
      let cache = secretKey

      return function () {
        if (cache !== secretKey) return cache
        // @ts-expect-error: FIXME
        return (cache = ('apply' in fn ? fn.apply(this, arguments) : (fn as any)(...arguments)))
      }
    }
    : function once (): Args {
      // @ts-expect-error: FIXME
      const map = getCacheObject(this)
      if (map[context.name]) {
        return map[context.name]
      }
      // @ts-expect-error: FIXME
      return (map[context.name] = target.apply(this, arguments))
    }
}
