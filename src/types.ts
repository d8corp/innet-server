import type { IncomingMessage, ServerResponse } from 'http'
import type { Handler } from 'innet'
import type { OpenAPIV3_1 as API } from 'openapi-types'

import type { ApiErrorValue, ApiValidationErrorValue } from './constants'

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

export type Formatter<I, O> = (value: I) => O

export interface IValidationErrorData extends Record<string, any> {
  error: ApiValidationErrorValue
}

export type ValidationErrorData = IValidationErrorData | undefined

export interface ValidationError<E extends string, P extends InValidationErrorParam, D extends ValidationErrorData> {
  error: E
  in: P
  data?: D
  or?: ValidationError<E, P, D>
}

export type ValidationResponse<
  E extends ApiErrorValue,
  P extends InValidationErrorParam,
  D extends ValidationErrorData
> = ValidationError<E, P, D> | undefined

export type Validator<
  V,
  D extends ValidationErrorData
> = (value: V, data?: D) => ValidationErrorData

export type EndpointRule<
  I,
  O,
  D extends ValidationErrorData
> = [Formatter<I, O> | undefined, Validator<O, D> | undefined]

export interface EndpointRules<
  I = any,
  O = any,
  D extends ValidationErrorData = ValidationErrorData
> {
  path?: EndpointRule<I, O, D>[]
  search?: EndpointRule<I, O, D>[]
  body?: EndpointRule<I, O, D>[]
  cookie?: EndpointRule<I, O, D>[]
  header?: EndpointRule<I, O, D>[]
  response?: EndpointRule<I, O, D>[]
}

export interface Endpoint<
  I = unknown,
  O = unknown,
  E extends ApiErrorValue = ApiErrorValue,
  P extends InValidationErrorParam = InValidationErrorParam,
  D extends ValidationErrorData = ValidationErrorData
> {
  key: string
  content?: any
  rules?: EndpointRules<I, O, D>
  handler?: Handler
  static?: Record<string, Endpoint<I, O, E, P, D>>
  dynamic?: Endpoint<I, O, E, P, D>[]
}

export type IntegerFormats = 'int32' | 'int64'
export type EndpointsMethods = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'trace'
export type InParam = 'query' | 'header' | 'path' | 'cookie'
export type InValidationErrorParam = InParam | 'body'
export type BodyType = 'application/x-www-form-urlencoded' | 'application/json' | 'multipart/form-data'
export type Endpoints<
  I = unknown,
  O = unknown,
  E extends ApiErrorValue = ApiErrorValue,
  P extends InValidationErrorParam = InValidationErrorParam,
  D extends ValidationErrorData = ValidationErrorData
> = Partial<Record<EndpointsMethods, Endpoint<I, O, E, P, D>>>

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

export type RequestPlugin = (req: IncomingMessage, res: ServerResponse) => boolean | undefined
