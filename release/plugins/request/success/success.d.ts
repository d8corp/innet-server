import { type HandlerPlugin } from 'innet';
export declare const successStatuses: {
    readonly accepted: 202;
    readonly alreadyReported: 208;
    readonly created: 201;
    readonly multiStatus: 207;
    readonly noContent: 204;
    readonly ok: 200;
    readonly outside: 203;
    readonly partialContent: 206;
    readonly resetContent: 205;
};
export type SuccessStatuses = keyof typeof successStatuses;
export interface SuccessProps {
    /**
     * Response data to send to the client.
     *
     * @example
     * ```tsx
     * <success>{{ id: 1, name: 'John' }}</success>
     * ```
     * @example
     * ```tsx
     * <success>Hello World</success>
     * ```
     */
    children?: any;
    /**
     * HTTP status code for the response.
     *
     * @default 200 (ok) or 204 (noContent) if no body
     *
     * @example
     * ```tsx
     * <success status="created">{{ id: 1 }}</success>
     * ```
     * @example
     * ```tsx
     * <success status={201}>{{ id: 1 }}</success>
     * ```
     */
    status?: SuccessStatuses | number;
    /**
     * Content-Type header for the response.
     *
     * @default auto-detected from body
     *
     * @example
     * ```tsx
     * <success type="text/html">
     *   {'<html><body>Hello</body></html>'}
     * </success>
     * ```
     */
    type?: string;
}
export declare const success: HandlerPlugin;
