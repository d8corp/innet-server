import html from '@innet/html';
import { switchAsync, SwitchProps } from '@innet/switch';
import { arrayAsync } from '@innet/utils';
import { cms, CmsProps, cookie, CookieProps, error, ErrorProps, file, FileProps, header, HeaderProps, proxy, ProxyProps, router, RouterProps, success, SuccessProps } from '../plugins';
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
};
export declare const objectPlugins: ((handler: any) => import("innet").PluginHandler)[];
declare const _default: import("innet").Handler;
export default _default;
declare global {
    namespace JSX {
        interface IntrinsicElements {
            server: ServerProps;
            router: RouterProps;
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
