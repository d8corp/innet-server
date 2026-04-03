import { type HandlerPlugin } from 'innet';
import { type SchemaProps } from '../../../types';
export interface StringProps extends SchemaProps<string> {
    /**
     * An optional format modifier serves as a hint at the contents and format of the string.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     * */
    format?: 'binary' | 'byte' | 'date' | 'date-time' | 'email' | 'hostname' | 'ipv4' | 'ipv6' | 'password' | 'uri' | 'uuid' | (string & {});
    /**
     * String length can be restricted using `min` and `max`.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     * */
    max?: number;
    /**
     * String length can be restricted using `min` and `max`.
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     * */
    min?: number;
    /**
     * The pattern keyword lets you define a regular expression template for the string value.
     * Only the values that match this template will be accepted.
     * The regular expression syntax used is from JavaScript (more specifically, ECMA 262).
     * Regular expressions are case-sensitive, that is, [a-z] and [A-Z] are different expressions.
     * @example For example, the following pattern matches a Social Security Number (SSN) in the 123-45-6789 format:
     * ```tsx
     * <string pattern='^\d{3}-\d{2}-\d{4}$' />
     * ```
     * @see https://swagger.io/docs/specification/v3_0/data-models/data-types/#strings
     * */
    pattern?: RegExp | string;
    /**
     * The `patternId` keyword is used to reference a pattern from the OpenAPI specification.
     * */
    patternId?: string;
}
export declare const string: HandlerPlugin;
