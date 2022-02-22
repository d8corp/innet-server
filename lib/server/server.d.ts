import { Handler } from 'innet';
import Action from '../action';
export interface SSL {
    cert: string;
    key: string;
}
export interface ServerProps {
    port?: number;
    ssl?: SSL;
    unknownError?: string;
    onStart?: (url: string) => any;
    onRequest?: (action: Action) => any;
    onError?: (e: Error) => any;
}
export declare function server({ props, children }: {
    props?: ServerProps;
    children: any;
}, handler: Handler): Promise<unknown>;
export default server;
