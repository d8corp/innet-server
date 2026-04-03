import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface NumberProps extends SchemaProps<number> {
    /**
     * The `exclusiveMaximum` keyword is used to restrict the value to be less than the specified number.
     * @example For example, the following value is valid:
     * ```tsx
     * <number exclusiveMaximum={10} />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    exclusiveMaximum?: boolean;
    /**
     * The `exclusiveMinimum` keyword is used to restrict the value to be greater than the specified number.
     * @example For example, the following value is valid:
     * ```tsx
     * <number exclusiveMinimum={10} />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    exclusiveMinimum?: boolean;
    /**
     * An optional format modifier serves as a hint at the contents and format of the string.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    format?: 'double' | 'float' | (string & {});
    /** Validate the number value by maximum. */
    max?: number;
    /** Validate the number value by minimum. */
    min?: number;
    /**
     * The `multipleOf` keyword is used to restrict the value to be a multiple of the specified number.
     * @example For example, the following value is valid:
     * ```tsx
     * <number multipleOf={2} />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#numbers
     * */
    multipleOf?: number;
}
export declare const number: HandlerPlugin;
