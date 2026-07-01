import { type HandlerPlugin } from 'innet';
import { type ApiErrorSchema, type ApiErrorSchemaRefs } from '../../../types';
export interface ApiProps {
    /** API content including endpoints, tags, and documentation elements */
    children?: any;
    /**
     * A description of the API.
     * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
     *
     * @example
     * ```tsx
     * <api
     *   title="My API"
     *   description="A comprehensive API for managing resources"
     * />
     * ```
     */
    description?: string;
    /**
     * Override default OpenAPI schemas for built-in API error responses.
     * Allows customization of error data structure for automatic validation errors.
     *
     * Available error codes: `'requestValidation'`, `'requestBodyContentType'`.
     *
     * Only works when `schemaGeneration` is enabled.
     *
     * @example
     * ```tsx
     * <api
     *   schemaGeneration
     *   errorSchema={{
     *     requestValidation: {
     *       type: 'object',
     *       properties: {
     *         error: { type: 'string' },
     *         details: { type: 'object' }
     *       }
     *     }
     *   }}
     * />
     * ```
     */
    errorSchema?: Partial<ApiErrorSchema>;
    /**
     * Override default OpenAPI component schema reference names for built-in API errors.
     * Useful when you want to use custom schema names in OpenAPI documentation.
     *
     * Available error codes: `'requestValidation'`, `'requestBodyContentType'`.
     *
     * Only works when `schemaGeneration` is enabled.
     *
     * @example
     * ```tsx
     * <api
     *   schemaGeneration
     *   errorSchemaRefs={{
     *     requestValidation: 'CustomValidationError',
     *     requestBodyContentType: 'CustomContentTypeError'
     *   }}
     * />
     * ```
     */
    errorSchemaRefs?: Partial<ApiErrorSchemaRefs>;
    /**
     * Regular expression to exclude paths from the API.
     *
     * @example
     * ```tsx
     * <api exclude={/^\/internal/} />
     * ```
     */
    exclude?: RegExp;
    /**
     * Regular expression to include only matching paths in the API.
     *
     * @example
     * ```tsx
     * <api include={/^\/api\/v1/} />
     * ```
     */
    include?: RegExp;
    /**
     * URL path prefix scopes the API.
     *
     * @default ''
     * @env INNET_API_PREFIX
     *
     * @example
     * ```tsx
     * <api prefix="/api/v1" />
     * ```
     */
    prefix?: string;
    /**
     * Enable automatic schema generation for OpenAPI documentation.
     * When enabled, generates schemas for request validation.
     *
     * Affects validation of request parameters:
     * - Returns 'requestValidation' error (400) when request data fails validation rules
     * - Returns 'requestBodyContentType' error (400) when required body is missing or has unsupported content type
     *
     * Works together with `errorSchema` and `errorSchemaRefs` to customize these built-in error schemas.
     *
     * @example
     * ```tsx
     * <api
     *   schemaGeneration
     *   errorSchemaRefs={{
     *     requestValidation: 'ValidationError'
     *   }}
     * />
     * ```
     */
    schemaGeneration?: boolean;
    /**
     * A short summary of the API.
     *
     * @example
     * ```tsx
     * <api summary="Resource Management API" />
     * ```
     */
    summary?: string;
    /**
     * A URL to the Terms of Service for the API.
     * This MUST be in the form of a URL.
     *
     * @example
     * ```tsx
     * <api termsOfService="https://example.com/terms" />
     * ```
     */
    termsOfService?: string;
    /**
     * The title of the API.
     *
     * @default ''
     *
     * @example
     * ```tsx
     * <api title="My API" />
     * ```
     */
    title?: string;
    /**
     * The version of the OpenAPI document (which is distinct from the
     * [OpenAPI Specification version](https://swagger.io/specification/#oas-version)
     * or the API implementation version).
     *
     * @default '0.0.0'
     * @env INNET_API_VERSION
     *
     * @example
     * ```tsx
     * <api version="1.2.3" />
     * ```
     */
    version?: string;
}
export declare const api: HandlerPlugin;
