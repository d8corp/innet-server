import { Handler } from 'innet'
import { ValidationMap } from '@cantinc/utils'
import { OpenAPIV3_1 as API } from 'openapi-types'

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

// Custom

export interface Formatter<V> {
  (value?: any): V;
}
export declare type FormatterMap<B> = {
  [K in keyof B]?: Formatter<B[K]>[];
};

export interface EndpointRule {
  validation?: ValidationMap<unknown>
  formatter?: FormatterMap<unknown>
}

export interface EndpointRules {
  path?: EndpointRule
  search?: EndpointRule
  body?: EndpointRule
  cookie?: EndpointRule
  header?: EndpointRule
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
export type BodyType = 'application/x-www-form-urlencoded' | 'application/json'
export type Endpoints = Partial<Record<EndpointsMethods, Endpoint>>
export type Params = Record<string, string | number>

export interface SSL {
  cert: string
  key: string
}

export interface ServerStartParams {
  port: number
  https: boolean
}

export interface SchemaTypeOptions <T> {
  default?: T
  example?: T
  description?: string
}

export interface SchemaValuesTypeOptions <T> extends SchemaTypeOptions<T> {
  values?: T[]
}
