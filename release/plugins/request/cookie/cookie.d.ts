import { type HandlerPlugin } from 'innet';
import { type Cookies } from 'cookie';
export interface CookieProps extends Cookies {
    key: string;
    value?: string;
}
export declare const cookie: HandlerPlugin;
