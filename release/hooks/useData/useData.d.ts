import { type ApiEndpoints, type TEndpoint } from '../../types';
type KeysWithField<F extends string> = {
    [K in keyof ApiEndpoints]: F extends keyof ApiEndpoints[K] ? K : never;
}[keyof ApiEndpoints];
export declare function useData<F extends Exclude<keyof TEndpoint, 'response'>, K extends KeysWithField<F> = KeysWithField<F>>(from: F, path?: K): ApiEndpoints[K][F];
export {};
