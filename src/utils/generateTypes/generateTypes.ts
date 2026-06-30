import { type Document, type InParam, type SchemaObject } from '../../types'

function getElement (docs: Document, target?: object) {
  if (!target) return target

  if ('$ref' in target) {
    return docs.components?.schemas?.[String(target.$ref).replace('#/components/schemas/', '')] ?? target
  }

  return target
}

function hasDefault (target?: object): boolean {
  return Boolean(target && ('default' in target || 'x-default' in target))
}

export function generateSchemaTypes (schema: SchemaObject, spaces: number = 2, lastChar = '\n'): string {
  const space = [...new Array(spaces)].map(() => ' ').join('')

  if ('$ref' in schema) {
    return `Schemas['${(schema.$ref as string).slice(21)}']${lastChar}`
  }

  const types = Array.isArray(schema.type) ? schema.type : [schema.type]
  let scope = ''

  for (let i = 0; i < types.length; i++) {
    const type = types[i]
    const operator = i ? ' | ' : ''

    if (schema.oneOf) {
      let result = ''

      for (const item of schema.oneOf) {
        if (result) {
          result += ' | '
        }

        result += generateSchemaTypes(item, spaces + 2, '')
      }

      scope += `${operator}${result}`
      continue
    }

    if (!type) {
      scope += `${operator}any`
      continue
    }

    if (type === 'integer') {
      scope += `${operator}${schema.format === 'int64' ? 'bigint' : 'number'}`
      continue
    }

    if (type === 'string') {
      if (schema.format === 'date-time') {
        scope += `${operator}Date`
        continue
      }

      if (schema.format === 'binary') {
        scope += `${operator}Bin`
        continue
      }

      scope += `${operator}string`
      continue
    }

    if (['boolean', 'null', 'number'].includes(type)) {
      scope += `${operator}${type}`
      continue
    }

    if (type === 'array') {
      if (schema.type === 'array' && 'prefixItems' in schema) {
        const value = (schema.prefixItems as any[]).map(item => generateSchemaTypes(item, spaces + 2, '')).join(', ')
        scope += `${operator}[${value}]`
        continue
      }

      if (schema.type !== 'array' || !schema.items) {
        scope += `${operator}any[]`
        continue
      }

      scope += `${operator}Array<${generateSchemaTypes(schema.items, spaces + 2, '')}>`
      continue
    }

    if (type !== 'object') {
      console.error('Error: Unknown Type', schema)
      scope += `${operator}any`
      continue
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

        if ('deprecated' in prop && prop.deprecated) {
          result += `${space}/** @deprecated */\n`
        }

        result += `${space}'${key}'${splitter} ${generateSchemaTypes(prop, spaces + 2)}`
      }
    }

    if (hasRestProps) {
      const value = hasProps
        ? 'any\n'
        : generateSchemaTypes(schema.additionalProperties as any, spaces + 2)
      result += `${space}[key: string]: ${value}`
    }

    scope += `${operator}${result}${space.slice(0, -2)}}`
  }

  return `${scope}${lastChar}`
}

export function generateTypes (docs: Document, namespace = 'Api'): string {
  let result = ''
  const schemas = docs.components?.schemas
  const paths = docs.paths

  if (schemas) {
    result += '  export interface Schemas {\n'

    for (const name in schemas) {
      result += `      ${name}: ${generateSchemaTypes(schemas[name], 8)}`
    }

    result += '    }\n'
  }

  result += '    export interface Endpoints {\n'

  for (const path in paths) {
    const pathObject = paths[path]
    for (const method in pathObject) {
      // @ts-expect-error: FIXME
      const endpoint = pathObject[method]
      const parameters = endpoint.parameters
      const requestBody = endpoint.requestBody
      const responses = endpoint.responses

      if (endpoint.deprecated) {
        result += '      /** @deprecated */\n'
      }

      result += `      '${method.toUpperCase()}:${path}': {\n`

      if (parameters) {
        const params: Record<InParam, string> = {
          cookie: '',
          header: '',
          path: '',
          query: '',
        }

        for (const param of parameters) {
          const splitter = param.in === 'path' || hasDefault(getElement(docs, param.schema)) || param.required ? ':' : '?:'
          params[param.in as InParam] += `          '${param.name as string}'${splitter} ${generateSchemaTypes(param.schema)}`
        }

        if (params.path) {
          result += `        params: {\n${params.path}        }\n`
        }

        if (params.query) {
          result += `        search: {\n${params.query}        }\n`
        }

        if (params.header) {
          result += `        headers: {\n${params.header}        }\n`
        }

        if (params.cookie) {
          result += `        cookies: {\n${params.cookie}        }\n`
        }
      }

      if (requestBody) {
        result += `        body: ${generateSchemaTypes(requestBody.content['multipart/form-data'].schema, 8)}`
      }

      if (responses) {
        result += '        response: {\n'
        for (const key in responses) {
          let multiple = false
          const response = responses[key]
          result += `          '${key}': `

          if (!response.content) {
            result += 'void'
          } else {
            for (const type in response.content) {
              if (multiple) {
                result += ' | '
              }

              result += generateSchemaTypes(response.content[type].schema, 12, '')

              multiple = true
            }
          }

          result += '\n'
        }

        result += '        }\n'
      }

      result += '      }\n'
    }
  }

  const body = result + '    }'

  return `import '@innet/server'
${body.includes('Bin') ? 'import { Bin } from \'@innet/server\'\n' : ''}
declare global {
  namespace ${namespace} {
  ${body}
  }
}

declare module '@innet/server' {
  interface ApiEndpoints extends ${namespace}.Endpoints {}
  interface ApiSchemas extends ${namespace}.Schemas {}
}
`
}
