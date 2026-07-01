import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export type ArrayProps = SchemaProps<any[]> & {
    /** Nested schema elements defining array items */
    children?: JSX.Element;
    /**
     * Maximum number of items (maxItems)
     *
     * @example
     * ```tsx
     * <array max={10}>
     *   <string />
     * </array>
     * ```
     * */
    max?: number;
    /**
     * Minimum number of items (minItems)
     *
     * @example
     * ```tsx
     * <array min={2}>
     *   <string />
     * </array>
     * ```
     * */
    min?: number;
    /**
     * Whether array items must be unique (uniqueItems)
     *
     * @example
     * ```tsx
     * <array unique>
     *   <string />
     * </array>
     * ```
     * */
    unique?: boolean;
};
export declare const array: HandlerPlugin;
