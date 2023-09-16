import { type Document, type InParam, type SchemaObject } from '../../types'

function hasDefault (target?: object): boolean {
  return Boolean(target && ('default' in target || 'x-default' in target))
}

export function generateSchemaTypes (schema: SchemaObject, spaces: number = 2, lastChar = '\n'): string {
  const space = [...new Array(spaces)].map(() => ' ').join('')

  if ('$ref' in schema) {
    return `Schemas.${(schema.$ref as string).slice(21)}${lastChar}`
  }

  if (schema.type === 'integer') {
    return `${schema.format === 'int64' ? 'bigint' : 'number'}${lastChar}`
  }

  if (schema.type === 'string') {
    if (schema.format === 'date-time') {
      return `Date${lastChar}`
    }

    if (schema.format === 'binary') {
      return `Bin${lastChar}`
    }

    return `string${lastChar}`
  }

  if (['boolean', 'number', 'null'].includes(schema.type as any)) {
    return `${schema.type as string}${lastChar}`
  }

  if (schema.oneOf) {
    let result = ''

    for (const item of schema.oneOf) {
      if (result) {
        result += ' | '
      }

      result += generateSchemaTypes(item, spaces + 2, '')
    }

    return result + lastChar
  }

  if (schema.type === 'array') {
    if (!schema.items) return `any[]${lastChar}`

    return `Array<${generateSchemaTypes(schema.items, spaces + 2, '')}>${lastChar}`
  }

  if (!schema.type) {
    return `any${lastChar}`
  }

  if (schema.type !== 'object') {
    console.error('unknown type', schema)
    return `any${lastChar}`
  }

  let result = '{\n'
  const required = schema.required || []
  const hasProps = Boolean(schema.properties && Object.keys(schema.properties).length)
  const hasRestProps = Boolean(
    typeof schema.additionalProperties === 'object' &&
    Object.keys(schema.additionalProperties).length,
  )

  if (hasProps) {
    for (const key in schema.properties) {
      const prop = schema.properties[key]
      const splitter = required.includes(key) || hasDefault(prop)
        ? ':'
        : '?:'

      result += `${space}${key}${splitter} ${generateSchemaTypes(prop, spaces + 2)}`
    }
  }

  if (hasRestProps) {
    const value = hasProps
      ? 'any\n'
      : generateSchemaTypes(schema.additionalProperties as any, spaces + 2)
    result += `${space}[key: string]: ${value}`
  }

  return `${result}${space.slice(0, -2)}}${lastChar}`
}

export function generateTypes (docs: Document, namespace = 'Api'): string {
  let result = `declare namespace ${namespace} {
  export interface Bin {
    filename: string
    fieldName: string
    originalFilename: string
    path: string
    type: string
    disposition: string
    size: number
    extension?: string
  }
`
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

      if (responses) {
        result += '      Response: {\n'
        for (const key in responses) {
          let multiple = false
          const response = responses[key]
          result += `        ['${key}']: `

          for (const type in response.content) {
            if (multiple) {
              result += ' | '
            }

            result += generateSchemaTypes(response.content[type].schema, 10, '')

            multiple = true
          }

          result += '\n'
        }

        result += '     }\n'
      }

      result += '    }\n'
    }
  }

  return result + '  }\n}'
}
