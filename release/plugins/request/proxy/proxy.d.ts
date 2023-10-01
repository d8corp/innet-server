/// <reference types="node" />
import { type HandlerPlugin } from 'innet';
import { type IncomingMessage } from 'http';
export interface ProxyProps {
    onProxyRes?: (res: IncomingMessage) => void;
    secure?: boolean;
    to: string;
}
export declare const proxy: HandlerPlugin;
