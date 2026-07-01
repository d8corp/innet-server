import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
import { type DateFormat, type DefaultDateFormat } from '../../../utils';
export type DateProps = SchemaProps<DateFormat, DefaultDateFormat> & {
    /**
     * Maximum allowed date.
     *
     * @example
     * ```tsx
     * <date max='2025-02-25' />
     * ```
     */
    max?: DateFormat;
    /**
     * Minimum allowed date.
     *
     * @example
     * ```tsx
     * <date min='2025-02-25' />
     * ```
     */
    min?: DateFormat;
};
export declare const date: HandlerPlugin;
