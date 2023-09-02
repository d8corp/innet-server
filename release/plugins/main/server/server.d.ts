/// <reference types="node" />
import { type HandlerPlugin } from 'innet';
import { type ServerResponse } from 'http';
import { type ServerStartParams, type SSL } from '../../../types';
export interface ServerProps {
    port?: number;
    ssl?: SSL;
    onStart?: (params: ServerStartParams) => any;
    onRequest?: (req: Request, res: ServerResponse) => any;
    onError?: (e: Error) => any;
    onDestroy?: () => any;
}
export declare const server: HandlerPlugin;
