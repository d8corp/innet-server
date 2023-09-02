import { type RulesErrors } from './types';
export declare class RulesError extends Error {
    data: {
        error: RulesErrors;
    } & object;
    constructor(error: RulesErrors, data?: object);
}
export declare function addKey(key: string | number, data?: any): string | number;
