import { type ApiEndpoints, type TEndpoint } from '../../types';
export declare function useData<F extends Exclude<keyof TEndpoint, 'response'>, D extends keyof ApiEndpoints>(from: F, path?: D): ApiEndpoints[D][F];
