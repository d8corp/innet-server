import { type ISODate } from '../../../types';
export type DateFormat = Date | ISODate | number;
export type DefaultDateFormat = 'now' | DateFormat;
export declare function dateTo(value: any, data?: object): Date;
