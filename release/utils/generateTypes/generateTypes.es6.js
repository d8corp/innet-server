function getElement(docs, target) {
    var _a, _b, _c;
    if (!target)
        return target;
    if ('$ref' in target) {
        return (_c = (_b = (_a = docs.components) === null || _a === void 0 ? void 0 : _a.schemas) === null || _b === void 0 ? void 0 : _b[String(target.$ref).replace('#/components/schemas/', '')]) !== null && _c !== void 0 ? _c : target;
    }
    return target;
}
function hasDefault(target) {
    return Boolean(target && ('default' in target || 'x-default' in target));
}
function generateSchemaTypes(schema, spaces = 2, lastChar = '\n') {
    const space = [...new Array(spaces)].map(() => ' ').join('');
    if ('$ref' in schema) {
        return `Schemas.${schema.$ref.slice(21)}${lastChar}`;
    }
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    let scope = '';
    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const operator = i ? ' | ' : '';
        if (schema.oneOf) {
            let result = '';
            for (const item of schema.oneOf) {
                if (result) {
                    result += ' | ';
                }
                result += generateSchemaTypes(item, spaces + 2, '');
            }
            scope += `${operator}${result}`;
            continue;
        }
        if (!type) {
            scope += `${operator}any`;
            continue;
        }
        if (type === 'integer') {
            scope += `${operator}${schema.format === 'int64' ? 'bigint' : 'number'}`;
            continue;
        }
        if (type === 'string') {
            if (schema.format === 'date-time') {
                scope += `${operator}Date`;
                continue;
            }
            if (schema.format === 'binary') {
                scope += `${operator}Bin`;
                continue;
            }
            scope += `${operator}string`;
            continue;
        }
        if (['boolean', 'null', 'number'].includes(type)) {
            scope += `${operator}${type}`;
            continue;
        }
        if (type === 'array') {
            if (schema.type !== 'array' || !schema.items) {
                scope += `${operator}any[]`;
                continue;
            }
            scope += `${operator}Array<${generateSchemaTypes(schema.items, spaces + 2, '')}>`;
            continue;
        }
        if (type !== 'object') {
            console.error('Error: Unknown Type', schema);
            scope += `${operator}any`;
            continue;
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
                if ('deprecated' in prop && prop.deprecated) {
                    result += `${space}/** @deprecated */\n`;
                }
                result += `${space}${key}${splitter} ${generateSchemaTypes(prop, spaces + 2)}`;
            }
        }
        if (hasRestProps) {
            const value = hasProps
                ? 'any\n'
                : generateSchemaTypes(schema.additionalProperties, spaces + 2);
            result += `${space}[key: string]: ${value}`;
        }
        scope += `${operator}${result}${space.slice(0, -2)}}`;
    }
    return `${scope}${lastChar}`;
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
            if (endpoint.deprecated) {
                result += '    /** @deprecated */\n';
            }
            result += `    ['${method.toUpperCase()}:${path}']: {\n`;
            if (parameters) {
                const params = {
                    cookie: '',
                    header: '',
                    path: '',
                    query: '',
                };
                for (const param of parameters) {
                    const splitter = param.in === 'path' || hasDefault(getElement(docs, param.schema)) || param.required ? ':' : '?:';
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
                    if (!response.content) {
                        result += 'void';
                    }
                    else {
                        for (const type in response.content) {
                            if (multiple) {
                                result += ' | ';
                            }
                            result += generateSchemaTypes(response.content[type].schema, 10, '');
                            multiple = true;
                        }
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
