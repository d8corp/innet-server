import { type HandlerPlugin } from 'innet';
export interface ContactProps {
    /**
     * The email address of the contact person/organization.
     * This MUST be in the form of an email address.
     *
     * @example
     * ```tsx
     * <contact email='support@example.com' />
     * ```
     */
    email?: string;
    /**
     * The identifying name of the contact person/organization.
     *
     * @example
     * ```tsx
     * <contact
     *   name='Support Team'
     *   email='support@example.com'
     * />
     * ```
     */
    name?: string;
    /**
     * The URL pointing to the contact information.
     * This MUST be in the form of a URL.
     *
     * @example
     * ```tsx
     * <contact url='https://support.example.com' />
     * ```
     */
    url?: string;
}
export declare const contact: HandlerPlugin;
