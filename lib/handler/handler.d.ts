import html from '@innet/html';
import { switchAsync, SwitchProps } from '@innet/switch';
import { arrayAsync, async } from '@innet/utils';
import { cms, CmsProps, cookie, CookieProps, error, ErrorProps, file, FileProps, header, HeaderProps, proxy, ProxyProps, router, RouterProps, success, SuccessProps, redirect, RedirectProps } from '../plugins';
import { server, ServerProps } from '../server';
import { serverFn } from '../experimental/serverFn';
export declare const arrayPlugins: (typeof arrayAsync)[];
export declare const JSXPlugins: {
    server: typeof server;
    html: typeof html;
    switch: typeof switchAsync;
    router: typeof router;
    cookie: typeof cookie;
    header: typeof header;
    success: typeof success;
    error: typeof error;
    cms: typeof cms;
    file: typeof file;
    proxy: typeof proxy;
    redirect: typeof redirect;
};
export declare const fnPlugins: (typeof serverFn)[];
export declare const objectPlugins: ((handler: any) => import("innet").PluginHandler)[];
export declare const promisePlugins: (typeof async)[];
declare const _default: import("innet").Handler;
export default _default;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            server: ServerProps;
            router: RouterProps;
            redirect: RedirectProps;
            cookie: CookieProps;
            success: SuccessProps;
            error: ErrorProps;
            header: HeaderProps;
            cms: CmsProps;
            file: FileProps;
            switch: SwitchProps;
            proxy: ProxyProps;
        }
    }
}
