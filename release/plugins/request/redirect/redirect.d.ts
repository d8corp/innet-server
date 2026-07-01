import { type HandlerPlugin } from 'innet';
export declare const redirectStatuses: {
    found: number;
    movedPermanently: number;
    multipleChoices: number;
    notModified: number;
    permanentRedirect: number;
    seeOther: number;
    temporaryRedirect: number;
    useProxy: number;
};
export type RedirectStatuses = keyof typeof redirectStatuses;
export interface RedirectProps {
    /**
     * Whether to encode the URL.
     *
     * @default false
     *
     * @example
     * ```tsx
     * <redirect to="/path/with spaces" encode />
     * ```
     */
    encode?: boolean;
    /**
     * HTTP redirect status code.
     *
     * @default 301 (movedPermanently)
     *
     * @example
     * ```tsx
     * <redirect to="/new-path" status="permanentRedirect" />
     * ```
     * @example
     * ```tsx
     * <redirect to="/temp-path" status={302} />
     * ```
     */
    status?: RedirectStatuses | number;
    /**
     * Target URL to redirect to.
     *
     * @example
     * ```tsx
     * <redirect to="/new-location" />
     * ```
     * @example
     * ```tsx
     * <redirect to="https://example.com" status="movedPermanently" />
     * ```
     */
    to: string;
}
export declare const redirect: HandlerPlugin;
