/// <reference types="node" />
/// <reference types="node" />
import { Context } from '@innet/jsx';
import { type Server as HttpServer } from 'http';
import { type Server as HttpsServer } from 'https';
export type ServerPlugin = () => any;
export interface ServerContext {
    port: number;
    server: HttpServer | HttpsServer;
}
export declare const serverContext: Context<ServerContext, ServerContext | undefined>;
export declare function useServer(): ServerContext;
