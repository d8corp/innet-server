import { Handler } from 'innet';
import { JSXElement } from '@innet/jsx';
import httpProxy from 'http-proxy';
export interface ProxyProps {
    to: string;
    secure?: boolean;
}
export declare const proxyServer: httpProxy;
export declare function proxy({ props: { to, secure } }: JSXElement<string, ProxyProps>, handler: Handler): symbol;
