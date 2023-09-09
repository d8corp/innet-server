import type { Handler } from 'innet'
import type { OpenAPIV3_1 as API } from 'openapi-types'

import type { ApiErrorValue } from './constants'
import { type Rule, type RulesErrors } from './utils/rules'

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

export interface IValidationErrorData extends Record<string, any> {
  error: RulesErrors
}

export type ValidationErrorData = IValidationErrorData | undefined

export interface EndpointRules {
  path?: Rule
  search?: Rule
  cookie?: Rule
  header?: Rule
  body?: Rule
  response?: Rule
}

export interface EndpointRulesMaps {
  path?: Record<string, Rule>
  search?: Record<string, Rule>
  cookie?: Record<string, Rule>
  header?: Record<string, Rule>
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
  rules?: EndpointRules
  rulesMaps?: EndpointRulesMaps
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
