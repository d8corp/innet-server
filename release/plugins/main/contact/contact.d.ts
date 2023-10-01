import { type HandlerPlugin } from 'innet';
export interface ContactProps {
    /** The email address of the contact person/organization. This MUST be in the form of an email address. */
    email?: string;
    /** The identifying name of the contact person/organization. */
    name?: string;
    /** The URL pointing to the contact information. This MUST be in the form of a URL. */
    url?: string;
}
export declare const contact: HandlerPlugin;
