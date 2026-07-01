import type { OpenAPIV3_1 } from 'openapi-types';
import { type RulesErrors } from './types';
export declare const inValidationValues: ["body", "query", "cookie", "header", "path"];
export declare const rulesErrors: readonly ["oneOf", "number", "date", "uuid", "integer", "minimum", "boolean", "minDate", "maxDate", "maximum", "minLength", "maxLength", "values", "object", "array", "tuple", "required", "null", "pattern", "string", "binary", "binaryAccept", "minBin", "maxBin", "unique", "minItems", "maxItems", "multipleOf"];
export declare const rulesErrorSchemas: Record<RulesErrors, OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject>;
