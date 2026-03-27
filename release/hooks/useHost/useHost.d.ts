import { Context } from '@innet/jsx';
import { type ServerObject } from '../../types';
export interface HostContext {
    server: ServerObject;
}
export declare const hostContext: Context<HostContext, HostContext | undefined>;
export declare function useHost(): HostContext;
