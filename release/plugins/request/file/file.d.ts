export interface FileProps {
    /** Fallback content when file is not found */
    children?: any;
    /**
     * Path to the file to serve.
     *
     * @example
     * ```tsx
     * <file path="public/index.html" />
     * ```
     * @example
     * ```tsx
     * <file path="./assets/logo.png">
     *   <error status="notFound" />
     * </file>
     * ```
     */
    path: string;
}
export declare function file(): void;
