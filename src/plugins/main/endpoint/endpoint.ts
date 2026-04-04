import { type HandlerPlugin, innet, useNewHandler } from 'innet'
import { useProps } from '@innet/jsx'
import { type OpenAPIV3_1 } from 'openapi-types'

import { defaultRequestBodyContentTypeSchema, defaultRequestValidationSchema } from '../../../constants'
import { endpointContext, type ServerPlugin, serverPlugins, useApi, useEffect, useTag } from '../../../hooks'
import { type EndpointsMethods, type OperationObject } from '../../../types'
import { getEndpoint } from '../../../utils'

function addErrorRequest<T extends OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.ResponseObject> (errorSchema: OpenAPIV3_1.ReferenceObject | OpenAPIV3_1.SchemaObject, response: T): T {
  if (!response) {
    return {
      content: {
        'application/json': {
          schema: errorSchema,
        },
      },
    } as unknown as T
  }

  if (!('content' in response)) {
    console.error('Cannot find content in response: ', response)
    return response
  }

  if (!('application/json' in response.content!)) {
    response.content!['application/json'] = {
      schema: errorSchema,
    }
    return response
  }

  const schema = response.content['application/json'].schema

  if (!schema) {
    response.content['application/json'].schema = errorSchema
    return response
  }

  if ('oneOf' in schema) {
    schema.oneOf!.push(errorSchema)
    return response
  }

  response.content['application/json'].schema = {
    oneOf: [schema, errorSchema],
  }

  return response
}

export interface EndpointProps {
  children?: any
  /**
   * Declares this operation to be deprecated.
   * Consumers SHOULD refrain from usage of the declared operation.
   * Default value is false.
   * */
  deprecated?: boolean
  /**
   * An optional, string description, intended to apply to all operations in this path.
   * [CommonMark syntax](https://spec.commonmark.org) MAY be used for rich text representation.
   * */
  description?: string

  /**
   * A method of the endpoint.
   * */
  method: EndpointsMethods

  /**
   * `operationId` is an optional unique string used to identify an operation.
   * If provided, these IDs must be unique among all operations described in your API.
   * */
  operationId?: string

  /**
   * A relative path to an individual endpoint.
   * The property MUST begin with a forward slash (/).
   * Path templating is allowed.
   * When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts.
   * Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical.
   * */
  path: string

  /**
   * Declares this operation to make an endpoint private.
   * That means the endpoint should not be described and will not be shown in the Open API documentation.
   * */
  private?: boolean

  /** It turns on auto-generation for schemas. */
  schemaGeneration?: boolean

  /**
   * An optional, string summary, intended to apply to all operations in this path.
   * */
  summary?: string
}

export const endpoint: HandlerPlugin = () => {
  const handler = useNewHandler()
  const tag = useTag()
  const props = useProps<EndpointProps>()

  const {
    docs,
    endpoints,
    props: apiProps,
  } = useApi()

  const {
    children,
    deprecated,
    description,
    method,
    operationId,
    path,
    private: privateMode,
    schemaGeneration = apiProps.schemaGeneration,
    summary,
  } = props

  const { paths } = docs

  if (!paths) throw Error('cannot find paths in docs')

  if (!paths[path]) {
    paths[path] = {}
  }

  if (paths[path][method]) {
    throw Error(`You cannot use the same endpoints ${method}:${path}`)
  }

  const operation: OperationObject = {}

  if (operationId) {
    operation.operationId = operationId
  }

  if (summary) {
    operation.summary = summary
  }

  if (description) {
    operation.description = description
  }

  if (deprecated) {
    operation.deprecated = deprecated
  }

  if (tag) {
    operation.tags = [tag.name]
  }

  if (!privateMode) {
    paths[path][method] = operation as any
  }

  if (!endpoints[method]) {
    endpoints[method] = { key: '', plugins: new Set<ServerPlugin>() }
  }

  const endpoint = getEndpoint(path, endpoints[method])

  if (schemaGeneration) {
    useEffect(() => {
      if (operation.requestBody || operation.parameters?.length) {
        if (!operation.responses) {
          operation.responses = {}
        }

        if (!docs.components) {
          docs.components = {}
        }

        if (!docs.components.schemas) {
          docs.components.schemas = {}
        }

        const ref = apiProps.errorShemaRefs?.requestValidation ?? 'ApiValidationError'

        if (!(ref in docs.components.schemas)) {
          docs.components.schemas[ref] = apiProps.errorShema?.requestValidation ?? defaultRequestValidationSchema
        }

        operation.responses[400] = addErrorRequest({ $ref: `#/components/schemas/${ref}` }, operation.responses[400])
      }
    })

    useEffect(() => {
      if (operation.requestBody) {
        if (!operation.responses) {
          operation.responses = {}
        }

        if (!docs.components) {
          docs.components = {}
        }

        if (!docs.components.schemas) {
          docs.components.schemas = {}
        }

        const ref = apiProps.errorShemaRefs?.requestValidation ?? 'ApiRequestBodyContentTypeError'

        if (!(ref in docs.components.schemas)) {
          docs.components.schemas[ref] = apiProps.errorShema?.requestBodyContentType ?? defaultRequestBodyContentTypeSchema
        }

        operation.responses[400] = addErrorRequest({ $ref: `#/components/schemas/${ref}` }, operation.responses[400])
      }
    })
  }

  // @ts-expect-error: it's always an object
  endpointContext.set(handler, { endpoint, operation, props })

  // @ts-expect-error: it's always an object
  serverPlugins.set(handler, endpoint.plugins)

  innet(children, handler)
}
