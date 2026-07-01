import { type HandlerPlugin } from 'innet';
import { type MakeRequired, type SchemaProps } from '../../../types';
type IntProps<T extends bigint | number> = SchemaProps<T> & {
    /**
     * Controls whether the `min` and `max` boundaries are exclusive (strict) or inclusive.
     *
     * - `true` — both `min` and `max` are exclusive
     * - `'min'` — only `min` is exclusive, `max` remains inclusive
     * - `'max'` — only `max` is exclusive, `min` remains inclusive
     *
     * When a boundary is exclusive, the validated value must be **strictly**
     * greater (for `min`) or strictly less (for `max`) than the given limit.
     *
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     *
     * @example
     * ```tsx
     * // Value must be strictly less than 10 (9 is OK, 10 is not)
     * <integer exclusive='max' max={10} />
     *
     * // Value must be strictly greater than 0 (1 is OK, 0 is not)
     * <integer exclusive='min' min={0} />
     *
     * // Both boundaries are exclusive: 0 < value < 100
     * <integer exclusive min={0} max={100} />
     * ```
     */
    exclusive?: 'max' | 'min' | boolean;
    /**
     * Integer format. Defines the bit width and the resulting JavaScript type.
     *
     * - `'int32'` (default) — 32-bit signed integer, results in JS `number`
     * - `'int64'` — 64-bit signed integer, results in JS `bigint`
     *
     * @see https://swagger.io/docs/specification/data-models/data-types/#numbers
     *
     * @example
     * ```tsx
     * // 32-bit integer (default)
     * <integer format='int32' />
     *
     * // 64-bit integer, converted to BigInt in JS
     * <integer format='int64' />
     * ```
     */
    format?: T extends bigint ? 'int64' : 'int32';
    /**
     * Maximum allowed value (inclusive by default). Use with `exclusive` to make it strict.
     *
     * @example
     * ```tsx
     * // Value must be <= 100
     * <integer max={100} />
     *
     * // Value must be < 100
     * <integer exclusive='max' max={100} />
     * ```
     */
    max?: T;
    /**
     * Minimum allowed value (inclusive by default). Use with `exclusive` to make it strict.
     *
     * @example
     * ```tsx
     * // Value must be >= 0
     * <integer min={0} />
     *
     * // Value must be > 0
     * <integer exclusive='min' min={0} />
     * ```
     */
    min?: T;
    /**
     * The value must be a multiple of the specified number.
     *
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     *
     * @example
     * ```tsx
     * // Allowed: ..., -10, -5, 0, 5, 10, 15, ...
     * <integer multipleOf={5} />
     * ```
     */
    multipleOf?: T;
};
export type IntegerProps = IntProps<number> | MakeRequired<IntProps<bigint>, 'format'>;
export declare const integer: HandlerPlugin;
export {};
