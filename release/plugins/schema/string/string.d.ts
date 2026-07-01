import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export type StringProps<T extends string = string> = SchemaProps<T> & {
    /**
     * An optional format modifier serves as a hint at the contents and format of the string.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     *
     * @example
     * ```tsx
     * <string format='email' />
     * ```
     * */
    format?: 'binary' | 'byte' | 'date' | 'date-time' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'password' | 'uri' | 'uuid' | (string & {});
    /**
     * String length can be restricted using `min` and `max`.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     *
     * @example
     * ```tsx
     * <string min={2} max={10} />
     * ```
     * */
    max?: number;
    /**
     * String length can be restricted using `min` and `max`.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     *
     * @example
     * ```tsx
     * <string min={2} max={10} />
     * ```
     * */
    min?: number;
    /**
     * The pattern keyword lets you define a regular expression template for the string value.
     * Only the values that match this template will be accepted.
     * The regular expression syntax used is from JavaScript (more specifically, ECMA 262).
     * Regular expressions are case-sensitive, that is, [a-z] and [A-Z] are different expressions.
     *
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     *
     * @example For example, the following pattern matches a Social Security Number (SSN) in the 123-45-6789 format:
     * ```tsx
     * <string pattern='^\d{3}-\d{2}-\d{4}$' />
     * ```
     * */
    pattern?: RegExp | string;
    /**
     * The `patternId` keyword is used to reference a pattern from the OpenAPI specification.
     *
     * @example
     * ```tsx
     * <string pattern='^\d{5}$' patternId='zipCode' />
     * ```
     * */
    patternId?: string;
};
export declare const string: HandlerPlugin;
