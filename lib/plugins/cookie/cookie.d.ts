import { Handler } from 'innet';
import { CookieSerializeOptions } from 'cookie';
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
