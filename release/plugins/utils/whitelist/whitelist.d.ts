export interface WhitelistProps {
    /** Content to execute when IP is not in whitelist */
    children?: any;
    /**
     * Comma-separated list of IP addresses to allow.
     *
     * @env INNET_WHITELIST_IP
     *
     * @example
     * ```tsx
     * <whitelist ip="192.168.1.1,10.0.0.1">
     *   <error status="forbidden" />
     * </whitelist>
     * ```
     * @example
     * ```tsx
     * <whitelist ip={['192.168.1.1', '10.0.0.1']}>
     *   <error status="forbidden" />
     * </whitelist>
     * ```
     */
    ip?: string | string[];
}
export declare function whitelist(): void;
