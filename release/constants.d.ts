import { type OpenAPIV3_1 } from 'openapi-types';
import { type BodyType } from './types';
export declare const apiErrors: readonly ["requestValidation", "requestBodyContentType"];
export type ApiErrorValue = typeof apiErrors[number];
export declare const allBodyTypes: BodyType[];
export declare const defaultRequestBodyContentTypeSchema: OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject;
export declare const defaultRequestValidationSchema: OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject;
