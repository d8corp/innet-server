/// <reference types="node" />
/// <reference types="node" />
import { Handler } from 'innet';
import http from 'http';
import http2 from 'https';
import { Request, Response } from '../../utils';
export interface SSL {
    cert: string;
    key: string;
}
export interface ServerProps {
    port?: number;
    ssl?: SSL;
    onStart?: (url: string) => any;
    onRequest?: (req: Request, res: Response) => any;
    onError?: (e: Error) => any;
    onDestroy?: () => any;
}
export declare function server({ props, children }: {
    props?: ServerProps;
    children: any;
}, handler: Handler): http2.Server<typeof http.IncomingMessage, typeof http.ServerResponse> | http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
