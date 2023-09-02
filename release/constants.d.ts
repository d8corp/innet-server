import { type BodyType } from './types';
export declare const apiErrors: readonly ["requestValidation", "requestBodyContentType"];
export type ApiErrorValue = typeof apiErrors[number];
export declare const allBodyTypes: BodyType[];
