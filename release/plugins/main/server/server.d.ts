import { type HandlerPlugin } from 'innet';
import { type IncomingMessage, type ServerResponse } from 'http';
import { type ServerStartParams, type SSL } from '../../../types';
export interface ServerProps {
    children?: any;
    onClose?: () => any;
    onError?: (e: Error) => any;
    onRequest?: (req: IncomingMessage, res: ServerResponse) => any;
    onStart?: (params: ServerStartParams) => any;
    port?: number;
    ssl?: SSL;
}
export declare const server: HandlerPlugin;
