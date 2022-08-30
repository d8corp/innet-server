import html from '@innet/html';
import { switchAsync, SwitchProps } from '@innet/switch';
import { arrayAsync, async } from '@innet/utils';
import { serverFn } from '../experimental/serverFn';
import { cms, CmsProps, cookie, CookieProps, error, ErrorProps, file, FileProps, header, HeaderProps, proxy, ProxyProps, redirect, RedirectProps, router, RouterProps, success, SuccessProps } from '../plugins';
import { server, ServerProps } from '../server';
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
export declare const handler: import("innet").Handler;
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
