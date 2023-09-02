export declare function once<This, Args extends any[], Result = unknown>(target: (this: This, ...args: Args) => Result, context: ClassMethodDecoratorContext<This, (this: This, ...args: Args) => Result>): any;
export declare function once<This, Args extends any[]>(target: (this: This, value: Args[0]) => void, context: ClassSetterDecoratorContext<This, Args[0]>): any;
export declare function once<This, Value>(value: () => Value, context: ClassGetterDecoratorContext<This, Value>): any;
export declare function once<This, Args extends any[], Result = unknown>(target: undefined, context: ClassFieldDecoratorContext<This, (...args: Args) => Result>): any;
