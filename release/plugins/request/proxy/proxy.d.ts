import { type HandlerPlugin } from 'innet';
import { type IncomingMessage } from 'http';
export interface ProxyProps {
    /**
     * Callback function executed when proxy receives a response.
     *
     * @example
     * ```tsx
     * <proxy
     *   to="https://api.example.com"
     *   onProxyRes={(res) => console.log('Proxy response:', res.statusCode)}
     * />
     * ```
     */
    onProxyRes?: (res: IncomingMessage) => void;
    /**
     * Whether to verify SSL certificates.
     *
     * @default false
     *
     * @example
     * ```tsx
     * <proxy to="https://api.example.com" secure />
     * ```
     */
    secure?: boolean;
    /**
     * Target URL to proxy requests to.
     *
     * @example
     * ```tsx
     * <proxy to="https://api.example.com" />
     * ```
     * @example
     * ```tsx
     * <proxy to="http://localhost:4000" />
     * ```
     */
    to: string;
}
export declare const proxy: HandlerPlugin;
