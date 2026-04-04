import { type OpenAPIV3_1 } from 'openapi-types'

import { type BodyType } from './types'
import { rulesErrorSchemas } from './utils/rules/constants'

export const apiErrors = [
  'requestValidation',
  'requestBodyContentType',
] as const

export type ApiErrorValue = typeof apiErrors[number]

export const allBodyTypes: BodyType[] = [
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
]

export const defaultRequestBodyContentTypeSchema: OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject = {
  description: 'The request has no body or has unsupported content type format',
  properties: {
    error: {
      const: 'requestBodyContentType',
      title: 'The error code',
      type: 'string',
    },
  },
  type: 'object',
}

export const defaultRequestValidationSchema: OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject = {
  description: 'The request contains invalid data',
  properties: {
    data: {
      oneOf: Object.values(rulesErrorSchemas),
    },
    error: {
      const: 'requestValidation',
      title: 'The error code',
      type: 'string',
    },
  },
  type: 'object',
}
