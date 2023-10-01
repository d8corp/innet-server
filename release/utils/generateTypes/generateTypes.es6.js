function hasDefault(target) {
    return Boolean(target && ('default' in target || 'x-default' in target));
}
function generateSchemaTypes(schema, spaces = 2, lastChar = '\n') {
    const space = [...new Array(spaces)].map(() => ' ').join('');
    if ('$ref' in schema) {
        return `Schemas.${schema.$ref.slice(21)}${lastChar}`;
    }
    if (schema.type === 'integer') {
        return `${schema.format === 'int64' ? 'bigint' : 'number'}${lastChar}`;
    }
    if (schema.type === 'string') {
        if (schema.format === 'date-time') {
            return `Date${lastChar}`;
        }
        if (schema.format === 'binary') {
            return `Bin${lastChar}`;
        }
        return `string${lastChar}`;
    }
    if (['boolean', 'null', 'number'].includes(schema.type)) {
        return `${schema.type}${lastChar}`;
    }
    if (schema.oneOf) {
        let result = '';
        for (const item of schema.oneOf) {
            if (result) {
                result += ' | ';
            }
            result += generateSchemaTypes(item, spaces + 2, '');
        }
        return result + lastChar;
    }
    if (schema.type === 'array') {
        if (!schema.items)
            return `any[]${lastChar}`;
        return `Array<${generateSchemaTypes(schema.items, spaces + 2, '')}>${lastChar}`;
    }
    if (!schema.type) {
        return `any${lastChar}`;
    }
    if (schema.type !== 'object') {
        console.error('unknown type', schema);
        return `any${lastChar}`;
    }
    let result = '{\n';
    const required = schema.required || [];
    const hasProps = Boolean(schema.properties && Object.keys(schema.properties).length);
    const hasRestProps = Boolean(typeof schema.additionalProperties === 'object' &&
        Object.keys(schema.additionalProperties).length);
    if (hasProps) {
        for (const key in schema.properties) {
            const prop = schema.properties[key];
            const splitter = required.includes(key) || hasDefault(prop)
                ? ':'
                : '?:';
            result += `${space}${key}${splitter} ${generateSchemaTypes(prop, spaces + 2)}`;
        }
    }
    if (hasRestProps) {
        const value = hasProps
            ? 'any\n'
            : generateSchemaTypes(schema.additionalProperties, spaces + 2);
        result += `${space}[key: string]: ${value}`;
    }
    return `${result}${space.slice(0, -2)}}${lastChar}`;
}
function generateTypes(docs, namespace = 'Api') {
    var _a;
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
`;
    const schemas = (_a = docs.components) === null || _a === void 0 ? void 0 : _a.schemas;
    const paths = docs.paths;
    if (schemas) {
        result += '  namespace Schemas {\n';
        for (const name in schemas) {
            result += `    export type ${name} = ${generateSchemaTypes(schemas[name], 6)}`;
        }
        result += '  }\n';
    }
    result += '  export interface Endpoints {\n';
    for (const path in paths) {
        const pathObject = paths[path];
        for (const method in pathObject) {
            // @ts-expect-error: FIXME
            const endpoint = pathObject[method];
            const parameters = endpoint.parameters;
            const requestBody = endpoint.requestBody;
            const responses = endpoint.responses;
            result += `    ['${method.toUpperCase()}:${path}']: {\n`;
            if (parameters) {
                const params = {
                    cookie: '',
                    header: '',
                    path: '',
                    query: '',
                };
                for (const param of parameters) {
                    const splitter = param.in === 'path' || hasDefault(param.schema) || param.required ? ':' : '?:';
                    params[param.in] += `        ${param.name}${splitter} ${generateSchemaTypes(param.schema)}`;
                }
                if (params.path) {
                    result += `      Params: {\n${params.path}      }\n`;
                }
                if (params.query) {
                    result += `      Search: {\n${params.query}      }\n`;
                }
                if (params.header) {
                    result += `      Headers: {\n${params.header}      }\n`;
                }
                if (params.cookie) {
                    result += `      Cookies: {\n${params.cookie}      }\n`;
                }
            }
            if (requestBody) {
                result += `      Body: ${generateSchemaTypes(requestBody.content['multipart/form-data'].schema, 8)}`;
            }
            if (responses) {
                result += '      Response: {\n';
                for (const key in responses) {
                    let multiple = false;
                    const response = responses[key];
                    result += `        ['${key}']: `;
                    for (const type in response.content) {
                        if (multiple) {
                            result += ' | ';
                        }
                        result += generateSchemaTypes(response.content[type].schema, 10, '');
                        multiple = true;
                    }
                    result += '\n';
                }
                result += '     }\n';
            }
            result += '    }\n';
        }
    }
    return result + '  }\n}';
}

export { generateSchemaTypes, generateTypes };
