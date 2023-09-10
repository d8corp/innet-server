/// <reference types="node" />
import { type HandlerPlugin } from 'innet';
import { type IncomingMessage, type ServerResponse } from 'http';
import { type ServerStartParams, type SSL } from '../../../types';
export interface ServerProps {
    port?: number;
    ssl?: SSL;
    onStart?: (params: ServerStartParams) => any;
    onRequest?: (req: IncomingMessage, res: ServerResponse) => any;
    onError?: (e: Error) => any;
    onClose?: () => any;
}
export declare const server: HandlerPlugin;
