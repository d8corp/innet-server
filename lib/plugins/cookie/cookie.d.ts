import { CookieSerializeOptions } from 'cookie';
import { Handler } from 'innet';
export interface CookieProps extends CookieSerializeOptions {
    key: string;
    value?: string;
}
export declare function cookie({ props: { key, value, ...opt }, children }: {
    props: {
        [x: string]: any;
        key: any;
        value: any;
    };
    children: any;
}, handler: Handler): any;
