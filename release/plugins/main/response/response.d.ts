import { type HandlerPlugin } from 'innet';
import { type ErrorStatuses, type RedirectStatuses, type SuccessStatuses } from '../../request';
export type StatusKey = ErrorStatuses | RedirectStatuses | SuccessStatuses;
export type ResponseStatus = 'default' | `${1 | 2 | 3 | 4 | 5}XX` | StatusKey | number;
export interface ResponseProps {
    children?: any;
    /**
     * A description of the response.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     *
     * @example
     * ```tsx
     * <response description='Empty response' />
     * ```
     * */
    description?: string;
    /**
     * Any [HTTP status code](https://swagger.io/specification/#http-codes) can be used as the property.
     * To define a range of response codes, this field MAY contain the uppercase wildcard character X.
     * For example, 2XX represents all response codes between [200-299].
     * Only the following range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX.
     *
     * @example
     * ```tsx
     * <response status={200}>
     *   <object />
     * </response>
     * ```
     *
     * @example
     * ```tsx
     * <response status='created' />
     * ```
     * */
    status?: ResponseStatus;
    /**
     * The media type of the response.
     * Default value is `'application/json'`.
     *
     * @example
     * ```tsx
     * <response type='text/html'>
     *   <string value='<html><body>Hello World!</body></html>' />
     * </response>
     * ```
     * */
    type?: string;
}
export declare const statuses: Record<StatusKey, number>;
export declare const response: HandlerPlugin;
