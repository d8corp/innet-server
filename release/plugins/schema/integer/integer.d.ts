import { type HandlerPlugin } from 'innet';
import { type IntegerFormats, type SchemaProps } from '../../../types';
export type IntegerProps = SchemaProps<bigint | number> & {
    /**
     * The `exclusiveMaximum` keyword is used to restrict the value to be less than the specified number.
     * @example For example, the following value is valid:
     * ```tsx
     * <integer exclusiveMaximum={10} />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    exclusiveMaximum?: bigint | boolean | number;
    /**
     * The `exclusiveMinimum` keyword is used to restrict the value to be greater than the specified number.
     * @example For example, the following value is valid:
     * ```tsx
     * <integer exclusiveMinimum={10} />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    exclusiveMinimum?: bigint | boolean | number;
    /**
     * An optional format modifier serves as a hint at the contents and format of the string.
     * @example For example, the following value is valid:
     * ```tsx
     * <integer format='int64' />
     * ```
     * @see https://swagger.io/docs/specification/data-models/data-types/#numbers
     * */
    format?: IntegerFormats;
    /** Validate the integer number value by maximum. */
    max?: bigint | number;
    /** Validate the integer number value by minimum. */
    min?: bigint | number;
    /**
     * The `multipleOf` keyword is used to restrict the value to be a multiple of the specified number.
     * @example For example, the following value is valid:
     * ```tsx
     * <number multipleOf={2} />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    multipleOf?: bigint | number;
};
export declare const integer: HandlerPlugin;
