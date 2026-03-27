import { type SchemaValues } from '../../../types';
export declare function getArrayValues<T, F extends (value: T | string) => any = () => T>(values: SchemaValues<T>, format?: F): ReturnType<F>[];
export declare function values<T>(values: T[]): (value: any, data?: object) => any;
