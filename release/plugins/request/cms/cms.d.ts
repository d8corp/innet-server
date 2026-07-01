export interface CmsProps {
    /** Fallback content when file is not found */
    children?: any;
    /**
     * Directory path to serve static files from.
     *
     * @default '.'
     * @env INNET_CMS_DIR
     *
     * @example
     * ```tsx
     * <cms dir="public" />
     * ```
     */
    dir?: string;
    /**
     * URL prefix to match before serving files.
     *
     * @default '/'
     * @env INNET_CMS_PREFIX
     *
     * @example
     * ```tsx
     * <cms prefix="/assets" />
     * ```
     */
    prefix?: string;
}
export declare function cms(): void;
