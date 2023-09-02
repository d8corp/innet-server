import { type HandlerPlugin } from 'innet';
import { type CookieSerializeOptions } from 'cookie';
export interface CookieProps extends CookieSerializeOptions {
    key: string;
    value?: string;
}
export declare const cookie: HandlerPlugin;
