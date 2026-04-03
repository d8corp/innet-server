import { type ApiEndpoints, type TEndpoint } from '../../types';
type KeysWithField<F extends string> = {
    [K in keyof ApiEndpoints]: F extends keyof ApiEndpoints[K] ? K : never;
}[keyof ApiEndpoints];
export declare function useData<F extends Exclude<keyof TEndpoint, 'response'>, K extends KeysWithField<F> = KeysWithField<F>, T extends boolean = false>(from: F, path?: K, withThrow?: T): T extends true ? ApiEndpoints[K][F] : ApiEndpoints[K][F] | undefined;
export {};
