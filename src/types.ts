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

export type ObjectType = ArraySchemaObjectType | NonArraySchemaObjectType

// Custom

export interface EndpointNode {
  deep: number
  children?: Record<string, EndpointNode>
}

export interface Endpoint extends EndpointNode {
  slot: string
  param?: string
  content?: any
}

export interface RootEndpoint extends EndpointNode {
  children: Record<string, Endpoint>
}

export type IntegerFormats = 'int32' | 'int64'
export type EndpointsMethods = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head' | 'trace'
export type Endpoints = Partial<Record<EndpointsMethods, Record<string, RootEndpoint>>>

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
