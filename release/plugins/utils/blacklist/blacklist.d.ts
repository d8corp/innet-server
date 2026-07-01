export interface BlacklistProps {
    /** Content to execute when IP is blocked */
    children?: any;
    /**
     * Comma-separated list of IP addresses to block.
     *
     * @env INNET_BLACKLIST_IP
     *
     * @example
     * ```tsx
     * <blacklist ip="192.168.1.1,10.0.0.1">
     *   <error status="forbidden" />
     * </blacklist>
     * ```
     * @example
     * ```tsx
     * <blacklist ip={['192.168.1.1', '10.0.0.1']}>
     *   <error status="forbidden" />
     * </blacklist>
     * ```
     */
    ip?: string | string[];
}
export declare function blacklist(): void;
