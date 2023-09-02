import { type HandlerPlugin } from 'innet';
export interface ProxyProps {
    to: string;
    secure?: boolean;
}
export declare const proxy: HandlerPlugin;
