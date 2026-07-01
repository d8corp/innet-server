import { type HandlerPlugin } from 'innet';
import type { SchemaProps } from '../../../types';
export type BinaryProps = SchemaProps<string> & {
    /**
     * File type filter (MIME types).
     *
     * @example
     * ```tsx
     * <binary accept='image/*' />
     * ```
     */
    accept?: string;
    /**
     * Maximum file size in bytes.
     *
     * @example
     * ```tsx
     * <binary max={5242880} />
     * ```
     */
    max?: number;
    /**
     * Minimum file size in bytes.
     *
     * @example
     * ```tsx
     * <binary min={1024} />
     * ```
     */
    min?: number;
};
export declare const binary: HandlerPlugin;
