import type { OpenAPIV3_1 as API } from 'openapi-types';
import type { ApiErrorValue } from './constants';
import { type ServerPlugin } from './hooks';
import { type Rule, type RulesErrors } from './utils/rules';
export type TagObject = API.TagObject;
export type Document = API.Document;
export type ServerObject = API.ServerObject;
export type OperationObject = API.OperationObject;
export type ResponseObject = API.ResponseObject;
export type SchemaObject = API.SchemaObject;
export type ArraySchemaObjectType = API.ArraySchemaObjectType;
export type NonArraySchemaObjectType = API.NonArraySchemaObjectType;
export type ArraySchemaObject = API.ArraySchemaObject;
export type ReferenceObject = API.ReferenceObject;
export type ParameterObject = API.ParameterObject;
export type RequestBodyObject = API.RequestBodyObject;
export type ObjectType = ArraySchemaObjectType | NonArraySchemaObjectType;
export type RefSchemaObject = ReferenceObject | SchemaObject;
export interface IValidationErrorData extends Record<string, any> {
    error: RulesErrors;
}
export type ValidationErrorData = IValidationErrorData | undefined;
export interface EndpointRules {
    body?: Rule;
    cookie?: Rule;
    header?: Rule;
    path?: Rule;
    response?: Rule;
    search?: Rule;
}
export interface EndpointRulesMaps {
    cookie?: Record<string, Rule>;
    header?: Record<string, Rule>;
    path?: Record<string, Rule>;
    search?: Record<string, Rule>;
}
export interface Endpoint<I = unknown, O = unknown, E extends ApiErrorValue = ApiErrorValue, P extends InValidationErrorParam = InValidationErrorParam, D extends ValidationErrorData = ValidationErrorData> {
    dynamic?: Endpoint<I, O, E, P, D>[];
    key: string;
    plugins: Set<ServerPlugin>;
    rules?: EndpointRules;
    rulesMaps?: EndpointRulesMaps;
    static?: Record<string, Endpoint<I, O, E, P, D>>;
}
export type IntegerFormats = 'int32' | 'int64';
export type EndpointsMethods = 'delete' | 'get' | 'head' | 'options' | 'patch' | 'post' | 'put' | 'trace';
export type InParam = 'cookie' | 'header' | 'path' | 'query';
export type InValidationErrorParam = 'body' | InParam;
export type BodyType = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data';
export type Endpoints<I = unknown, O = unknown, E extends ApiErrorValue = ApiErrorValue, P extends InValidationErrorParam = InValidationErrorParam, D extends ValidationErrorData = ValidationErrorData> = Partial<Record<EndpointsMethods, Endpoint<I, O, E, P, D>>>;
export interface SSL {
    cert: string;
    key: string;
}
export interface ServerStartParams {
    https: boolean;
    port: number;
}
export interface BaseSchemaProps<T> {
    default?: T;
    description?: string;
    example?: T;
    examples?: T[];
    ref?: string;
}
export interface ValuesSchemaProps<T> extends BaseSchemaProps<T> {
    values?: T[];
}
