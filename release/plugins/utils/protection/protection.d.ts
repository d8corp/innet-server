export interface ProtectionProps {
    /** Content to execute when protection check fails */
    children?: any;
    /**
     * Cookie name for storing protection state.
     *
     * @default 'protection'
     * @env INNET_PROTECTION_COOKIE_KEY
     *
     * @example
     * ```tsx
     * <protection cookieKey="auth_token" value="secret123">
     *   <error status="forbidden" />
     * </protection>
     * ```
     */
    cookieKey?: string;
    /**
     * Comma-separated list of IPs to exempt from protection.
     *
     * @env INNET_PROTECTED_IP
     *
     * @example
     * ```tsx
     * <protection value="secret123" excludeIp="127.0.0.1,::1">
     *   <error status="forbidden" />
     * </protection>
     * ```
     * @example
     * ```tsx
     * <protection value="secret123" excludeIp={['127.0.0.1', '::1']}>
     *   <error status="forbidden" />
     * </protection>
     * ```
     */
    excludeIp?: string | string[];
    /**
     * How long (in seconds) the protection is valid.
     *
     * @default 31536000 (1 year)
     * @env INNET_PROTECTION_MAX_AGE
     *
     * @example
     * ```tsx
     * <protection value="secret123" maxAge={86400}>
     *   <error status="forbidden" />
     * </protection>
     * ```
     */
    maxAge?: number;
    /**
     * Query parameter name for checking protection.
     *
     * @default 'protection'
     * @env INNET_PROTECTION_SEARCH_KEY
     *
     * @example
     * ```tsx
     * <protection searchKey="token" value="secret123">
     *   <error status="forbidden" />
     * </protection>
     * ```
     */
    searchKey?: string;
    /**
     * Secret value that clients must provide.
     *
     * @env INNET_PROTECTION
     *
     * @example
     * ```tsx
     * <protection value="secret123">
     *   <error status="forbidden" />
     * </protection>
     * ```
     */
    value?: string;
}
export declare function protection(): void;
