import type { SchemaValues } from '../../../types';
export declare function getArrayValues<T extends Record<number | string, unknown> | unknown[]>(values: T): T extends SchemaValues<infer V> ? V[] : never;
export declare function values<T>(values: T[]): (value: any, data?: object) => any;
