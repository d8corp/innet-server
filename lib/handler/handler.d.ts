import html from '@innet/html';
import { context, ContextProps, slot, SlotProps, slots, SlotsProps } from '@innet/jsx';
import { switchAsync, SwitchProps } from '@innet/switch';
import { arrayAsync, async } from '@innet/utils';
import { serverFn } from '../experimental/serverFn';
import { access, AccessProps, cms, CmsProps, cookie, CookieProps, error, ErrorProps, file, FileProps, formatter, FormatterProps, header, HeaderProps, proxy, ProxyProps, redirect, RedirectProps, router, RouterProps, success, SuccessProps, validation, ValidationProps } from '../plugins';
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
    validation: typeof validation;
    formatter: typeof formatter;
    context: typeof context;
    slot: typeof slot;
    slots: typeof slots;
    access: typeof access;
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
            validation: ValidationProps<any>;
            formatter: FormatterProps<any>;
            context: ContextProps;
            slot: SlotProps;
            slots: SlotsProps;
            access: AccessProps;
        }
    }
}
