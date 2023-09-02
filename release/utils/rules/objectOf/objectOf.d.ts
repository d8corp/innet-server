import { type Rule } from '../types';
export type ObjectOf = Record<string, Rule>;
export declare function objectOf(map: ObjectOf): (value: any, data?: Record<string, any>) => any;
