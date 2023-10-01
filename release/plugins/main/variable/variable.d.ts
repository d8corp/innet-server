import { type HandlerPlugin } from 'innet';
export interface VariableProps {
    /**
     * An optional description for the server variable.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     * */
    description?: string;
    /**
     * A server url parameter
     * */
    key: string;
    /**
     * The default value to use for substitution,
     * which SHALL be sent if an alternate value is not supplied.
     * If the `values` is defined, the `value` MUST exist in the `values`.
     * */
    value?: string;
    /**
     * An enumeration of string values to be used if the substitution options are from a limited set.
     * The array MUST NOT be empty.
     * */
    values?: [string, string, ...string[]];
}
export declare const variable: HandlerPlugin;
