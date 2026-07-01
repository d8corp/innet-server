import { type HandlerPlugin } from 'innet';
export interface VariableProps {
    /**
     * An optional description for the server variable.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     *
     * @example
     * ```tsx
     * <variable
     *   key='env'
     *   description='Environment'
     * />
     * */
    description?: string;
    /**
     * A server url parameter
     *
     * @example
     * ```tsx
     * <variable key='env' />
     * ```
     * */
    key: string;
    /**
     * The default value to use for substitution,
     * which SHALL be sent if an alternate value is not supplied.
     * If the `values` is defined, the `value` MUST exist in the `values`.
     *
     * @example
     * ```tsx
     * <variable key='env' value='prod' />
     * ```
     * */
    value?: string;
    /**
     * An enumeration of string values to be used if the substitution options are from a limited set.
     * The array MUST NOT be empty.
     *
     * @example
     * ```tsx
     * <variable
     *   key='env'
     *   values={['dev', 'prod']}
     * />
     * ```
     * */
    values?: [string, string, ...string[]];
}
export declare const variable: HandlerPlugin;
