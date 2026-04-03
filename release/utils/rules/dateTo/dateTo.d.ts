import { type ISOString } from '../../../types';
export type DateFormat = Date | ISOString | number;
export type DefaultDateFormat = 'now' | DateFormat;
export declare function dateTo(value: any, data?: object): Date;
