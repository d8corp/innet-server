import { type HandlerPlugin } from 'innet';
import { type IncomingMessage, type ServerResponse } from 'http';
import { type ServerStartParams, type SSL } from '../../../types';
export type ServerFormatError = (target: {
    data: any;
    error: string;
}) => string;
export interface ServerProps {
    /** Server content including routes, APIs, and configurations */
    children?: any;
    /**
     * Custom function to format error responses.
     * Allows you to customize the JSON structure returned to clients when an error occurs.
     *
     * @example
     * ```tsx
     * <server formatError={({ error, data }) => JSON.stringify({ err: error, data })}>
     *   <return>
     *     <error />
     *   </return>
     * </server>
     * ```
     */
    formatError?: ServerFormatError;
    /**
     * Callback function executed when the server closes.
     *
     * @example
     * ```tsx
     * <server onClose={() => console.log('Server closed')} />
     * ```
     */
    onClose?: () => any;
    /**
     * Callback function executed when a request error occurs.
     *
     * @example
     * ```tsx
     * <server onError={(error) => console.error(error)} />
     * ```
     */
    onError?: (e: Error) => any;
    /**
     * Callback function executed for every request.
     *
     * @example
     * ```tsx
     * <server onRequest={(req, res) => console.log(req.url)} />
     * ```
     */
    onRequest?: (req: IncomingMessage, res: ServerResponse) => any;
    /**
     * Callback function executed when the server starts.
     *
     * @example
     * ```tsx
     * import { httpOnStart } from '@innet/server'
     *
     * export default <server onStart={httpOnStart} />
     * ```
     */
    onStart?: (params: ServerStartParams) => any;
    /**
     * Server port.
     *
     * By default, uses port `80` for HTTP and `443` for HTTPS.
     * HTTPS mode is automatically enabled when SSL certificates are provided via the `ssl` parameter.
     *
     * @default 80 (HTTP) or 443 (HTTPS)
     * @env INNET_PORT
     *
     * @example
     * ```tsx
     * <server port={3000} />
     * ```
     */
    port?: number;
    /**
     * SSL certificates configuration for HTTPS.
     *
     * The framework automatically detects whether the provided strings are file paths or certificate contents.
     * If the string starts with `-----BEGIN CERTIFICATE-----` or `-----BEGIN PRIVATE KEY-----`, it's treated as direct content.
     * Otherwise, it's treated as a file path and the content is read from disk.
     *
     * @default { cert: 'localhost.crt', key: 'localhost.key' }
     * @env INNET_SSL_CRT, INNET_SSL_KEY
     *
     * @example
     * ```tsx
     * <server ssl={{ cert: './localhost.crt', key: './localhost.key' }} />
     * ```
     * @example
     * ```tsx
     * <server ssl={{
     *   cert: '-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----',
     *   key: '-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----'
     * }} />
     * ```
     */
    ssl?: SSL;
}
export declare const server: HandlerPlugin;
