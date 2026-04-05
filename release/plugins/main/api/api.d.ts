import { type HandlerPlugin } from 'innet';
import { type ApiErrorSchema, type ApiErrorSchemaRefs } from '../../../types';
export interface ApiProps {
    children?: any;
    /** A description of the API. [CommonMark syntax](https://spec.commonmark.or.org) MAY be used for rich text representation. */
    description?: string;
    /** URL path prefix scopes the API. */
    errorShema?: Partial<ApiErrorSchema>;
    /** Error schema reference names. */
    errorShemaRefs?: Partial<ApiErrorSchemaRefs>;
    exclude?: RegExp;
    include?: RegExp;
    /** URL path prefix scopes the API. */
    prefix?: string;
    /** It turns on auto-generation for schemas. */
    schemaGeneration?: boolean;
    /** A short summary of the API. */
    summary?: string;
    /** A URL to the Terms of Service for the API. This MUST be in the form of a URL. */
    termsOfService?: string;
    /** The title of the API. */
    title?: string;
    /**
     * The version of the OpenAPI document (which is distinct from the
     * [OpenAPI Specification version](https://swagger.io/specification/#oas-version)
     * or the API implementation version).
     * @example: 0.0.1
     * @default: 0.0.0
     * */
    version?: string;
}
export declare const api: HandlerPlugin;
