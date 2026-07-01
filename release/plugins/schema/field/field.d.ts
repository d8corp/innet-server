import { type HandlerPlugin } from 'innet';
export interface FieldProps {
    /**
     * Child elements defining the field schema.
     *
     * @example
     * <field key='id'>
     *   <uuid />
     * </field>
     */
    children?: any;
    /**
     * Mark field as deprecated.
     *
     * @example
     * ```tsx
     * <field key='id' deprecated>
     *   <uuid />
     * </field>
     * ```
     */
    deprecated?: boolean;
    /**
     * Field description in CommonMark format.
     *
     * @example
     * ```tsx
     * <field key='id' description='User unique identifier'>
     *   <uuid />
     * </field>
     * ```
     */
    description?: string;
    /**
     * Field name (required).
     *
     * @example
     * <field key='email'>
     *   <string format='email' />
     * </field>
     */
    key: string;
    /**
     * Mark field as optional (not required).
     *
     * @default false
     *
     * @example
     * <field key='nickname' optional>
     *   <string />
     * </field>
     */
    optional?: boolean;
    /**
     * Mark field as read-only.
     *
     * @example
     * <field key='id' readOnly>
     *   <uuid />
     * </field>
     */
    readOnly?: boolean;
    /**
     * Field title.
     *
     * @example
     * ```tsx
     * <field key='id' title='User unique identifier'>
     *   <uuid />
     * </field>
     * ```
     */
    title?: string;
    /**
     * Mark field as write-only.
     *
     * @example
     * <field key='password' writeOnly>
     *   <string min={8} />
     * </field>
     */
    writeOnly?: boolean;
}
export declare const field: HandlerPlugin;
