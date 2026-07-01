import { Context } from '@innet/jsx';
import { type Server as HttpServer } from 'http';
import { type Server as HttpsServer } from 'https';
import { type ApiProps, type ServerProps, type UiProps } from '../../plugins';
export type ServerPlugin = () => any;
export interface ServerContext {
    initAPI: (string: ApiProps) => void;
    initUI: (string: UiProps) => void;
    port: number;
    props: ServerProps;
    server: HttpServer | HttpsServer;
}
export declare const serverContext: Context<ServerContext, ServerContext | undefined>;
export declare function useServer(): ServerContext;
