import { Handler } from 'innet'
import { ValidationError, ValidationMap } from '@cantinc/utils'
import { ValidationErrorData } from '@cantinc/utils/validation/types'
import { IncomingMessage, ServerResponse } from 'http'
import { OpenAPIV3_1 as API } from 'openapi-types'

import { ApiErrorValue, ApiValidationErrorValue } from './constants'

// Open API

export type TagObject = API.TagObject
export type Document = API.Document
export type ServerObject = API.ServerObject
export type OperationObject = API.OperationObject
export type ResponseObject = API.ResponseObject
export type SchemaObject = API.SchemaObject
export type ArraySchemaObjectType = API.ArraySchemaObjectType
export type NonArraySchemaObjectType = API.NonArraySchemaObjectType
export type ArraySchemaObject = API.ArraySchemaObject
export type ReferenceObject = API.ReferenceObject
export type ParameterObject = API.ParameterObject
export type RequestBodyObject = API.RequestBodyObject

export type ObjectType = ArraySchemaObjectType | NonArraySchemaObjectType
export type RefSchemaObject = SchemaObject | ReferenceObject

// Custom

export interface Formatter<V> {
  (value?: any): V;
}
export declare type FormatterMap<B> = {
  [K in keyof B]?: Formatter<B[K]>[];
};

export interface ApiError<K, D = {}> extends Partial<ValidationError<K, D>> {
  error: ApiErrorValue | string
  data?: ValidationErrorData<K> & D;
}

export type EndpointRule = [FormatterMap<unknown>, ValidationMap<unknown>, Record<string, any>]

export interface EndpointRules {
  path?: EndpointRule[]
  search?: EndpointRule[]
  body?: EndpointRule[]
  cookie?: EndpointRule[]
  header?: EndpointRule[]
}

export interface Endpoint {
  key: string
  content?: any
  rules?: EndpointRules
  handler?: Handler
  static?: Record<string, Endpoint>
  dynamic?: Endpoint[]
}

export type IntegerFormats = 'int32' | 'int64'
export type EndpointsMethods = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'trace'
export type InParam = 'query' | 'header' | 'path' | 'cookie'
export type BodyType = 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'
export type Endpoints = Partial<Record<EndpointsMethods, Endpoint>>
export type Params = Record<string, string | number>

export interface ApiValidationErrorData<K, D = {}> extends ValidationError <K, D>{
  error: ApiValidationErrorValue
  data: ValidationErrorData<K> & D
}

export interface ApiValidationError<K, D = {}> extends ApiError<K, ApiValidationErrorData<K, D> & {
  in: InParam
  or?: ApiValidationError<K>
}> {
  error: ApiErrorValue
}

export type ApiErrorResponse<K, D = {}> = ApiError<K, D> | ApiValidationError<K> | undefined | void

export interface SSL {
  cert: string
  key: string
}

export interface ServerStartParams {
  port: number
  https: boolean
}

export interface BaseSchemaProps<T> {
  default?: T
  example?: T
  examples?: T[]
  description?: string
  ref?: string
}

export interface ValuesSchemaProps<T> extends BaseSchemaProps<T> {
  values?: T[]
}

export interface Fallback {
  children: any
  handler: Handler
}

export type RequestPlugin = (req: IncomingMessage, res: ServerResponse) => boolean | void
