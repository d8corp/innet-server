import { Handler } from 'innet';
import { Action, ActionParams } from '../action';
export interface SSL {
    cert: string;
    key: string;
}
export interface ServerProps {
    actionParams?: ActionParams;
    port?: number;
    ssl?: SSL;
    unknownError?: string;
    onStart?: (url: string) => any;
    onRequest?: (action: Action) => any;
    onError?: (e: Error, action?: Action) => any;
    onDestroy?: () => any;
}
export declare function server({ props, children }: {
    props?: ServerProps;
    children: any;
}, handler: Handler): Promise<unknown>;
