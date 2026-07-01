import { type HandlerPlugin } from 'innet';
import { type Cookies } from 'cookie';
export interface CookieProps extends Cookies {
    /**
     * Cookie name.
     *
     * @example
     * ```tsx
     * <cookie key="sessionId" value="abc123" />
     * ```
     */
    key: string;
    /**
     * Cookie value. Leave empty to delete the cookie.
     *
     * @example
     * ```tsx
     * <cookie
     *   key="sessionId"
     *   value="abc123"
     *   httpOnly
     *   secure
     *   sameSite
     *   maxAge={86400}
     * />
     * ```
     * @example
     * ```tsx
     * <cookie key="sessionId" />
     * ```
     */
    value?: string;
}
export declare const cookie: HandlerPlugin;
