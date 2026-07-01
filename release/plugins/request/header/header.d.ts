import { type HandlerPlugin } from 'innet';
export interface HeaderProps {
    /**
     * Header name.
     *
     * @example
     * ```tsx
     * <header key="Cache-Control" value="no-cache" />
     * ```
     */
    key: string;
    /**
     * Header value.
     *
     * @example
     * ```tsx
     * <header key="Cache-Control" value="no-cache" />
     * ```
     */
    value: string;
}
export declare const header: HandlerPlugin;
