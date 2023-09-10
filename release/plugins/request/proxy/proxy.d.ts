/// <reference types="node" />
import { type HandlerPlugin } from 'innet';
import { type IncomingMessage } from 'http';
export interface ProxyProps {
    to: string;
    secure?: boolean;
    onProxyRes?: (res: IncomingMessage) => void;
}
export declare const proxy: HandlerPlugin;
