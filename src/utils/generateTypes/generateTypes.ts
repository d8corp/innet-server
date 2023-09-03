import { type Document, type InParam, type SchemaObject } from '../../types'

function hasDefault (target?: object): boolean {
  return Boolean(target && ('default' in target || 'x-default' in target))
}

export function generateSchemaTypes (schema: SchemaObject, spaces: number = 2): string {
  const space = [...new Array(spaces)].map(() => ' ').join('')

  if ('$ref' in schema) {
    return `Schemas.${(schema.$ref as string).slice(21)}\n`
  }

  if (schema.type === 'integer') {
    return `${schema.format === 'int64' ? 'bigint' : 'number'}\n`
  }

  if (schema.type === 'string') {
    if (schema.format === 'date-time') {
      return 'Date\n'
    }

    if (schema.format === 'binary') {
      return 'Bin\n'
    }

    return 'string\n'
  }

  if (['boolean', 'number', 'null'].includes(schema.type as any)) {
    return `${schema.type as string}\n`
  }

  if (schema.type === 'array') {
    if (!schema.items) return 'any[]\n'

    return `(${generateSchemaTypes(schema.items, spaces + 2).slice(0, -1)})[]\n`
  }

  if (schema.type !== 'object') {
    console.error('unknown type', schema)
    return 'any\n'
  }

  let result = '{\n'
  const required = schema.required || []

  for (const key in schema.properties) {
    const prop = schema.properties[key]
    const splitter = required.includes(key) || hasDefault(prop)
      ? ':'
      : '?:'

    result += `${space}${key}${splitter} ${generateSchemaTypes(prop, spaces + 2)}`
  }

  return `${result}${space.slice(0, -2)}}\n`
}

export function generateTypes (docs: Document): string {
  let result = 'declare namespace Api {\n  export interface Bin {\n    filename: string\n    fieldName: string\n    originalFilename: string\n    path: string\n    type: string\n    disposition: string\n    size: number\n    extension?: string\n  }\n'
  const schemas = docs.components?.schemas
  const paths = docs.paths

  if (schemas) {
    result += '  namespace Schemas {\n'

    for (const name in schemas) {
      result += `    export type ${name} = ${generateSchemaTypes(schemas[name], 6)}`
    }

    result += '  }\n'
  }

  result += '  export interface Endpoints {\n'

  for (const path in paths) {
    const pathObject = paths[path]
    for (const method in pathObject) {
      // @ts-expect-error: FIXME
      const endpoint = pathObject[method]
      const parameters = endpoint.parameters
      const requestBody = endpoint.requestBody
      const responses = endpoint.responses
      result += `    ['${method.toUpperCase()}:${path}']: {\n`

      if (parameters) {
        const params: Record<InParam, string> = {
          query: '',
          header: '',
          path: '',
          cookie: '',
        }

        for (const param of parameters) {
          const splitter = param.in === 'path' || hasDefault(param.schema) ? ':' : '?:'
          params[param.in as InParam] += `        ${param.name as string}${splitter} ${generateSchemaTypes(param.schema)}`
        }

        if (params.path) {
          result += `      Params: {\n${params.path}      }\n`
        }

        if (params.query) {
          result += `      Search: {\n${params.query}      }\n`
        }

        if (params.header) {
          result += `      Headers: {\n${params.header}      }\n`
        }

        if (params.cookie) {
          result += `      Cookies: {\n${params.cookie}      }\n`
        }
      }

      if (requestBody) {
        result += `      Body: ${generateSchemaTypes(requestBody.content['multipart/form-data'].schema, 8)}`
      }

      if (responses?.default) {
        result += `      Response: ${generateSchemaTypes(responses.default.content['application/json'].schema, 8)}`
      }

      result += '    }\n'
    }
  }

  return result + '  }\n}'
}
