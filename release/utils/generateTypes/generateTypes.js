'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function hasDefault(target) {
    return Boolean(target && ('default' in target || 'x-default' in target));
}
function generateSchemaTypes(schema, spaces = 2) {
    const space = [...new Array(spaces)].map(() => ' ').join('');
    if ('$ref' in schema) {
        return `Schemas.${schema.$ref.slice(21)}\n`;
    }
    if (schema.type === 'integer') {
        return `${schema.format === 'int64' ? 'bigint' : 'number'}\n`;
    }
    if (['string', 'boolean', 'number', 'null'].includes(schema.type)) {
        return `${schema.type}\n`;
    }
    if (schema.type === 'array') {
        if (!schema.items)
            return 'any[]\n';
        return `(${generateSchemaTypes(schema.items, spaces + 2).slice(0, -1)})[]\n`;
    }
    if (schema.type !== 'object') {
        console.error('unknown type', schema);
        return 'any\n';
    }
    let result = '{\n';
    const required = schema.required || [];
    for (const key in schema.properties) {
        const prop = schema.properties[key];
        const splitter = required.includes(key) || hasDefault(prop)
            ? ':'
            : '?:';
        result += `${space}${key}${splitter} ${generateSchemaTypes(prop, spaces + 2)}`;
    }
    return `${result}${space.slice(0, -2)}}\n`;
}
function generateTypes(docs) {
    var _a;
    let result = 'declare namespace Api {\n';
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
                    query: '',
                    header: '',
                    path: '',
                    cookie: '',
                };
                for (const param of parameters) {
                    const splitter = param.in === 'path' || hasDefault(param.schema) ? ':' : '?:';
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
            if (responses === null || responses === void 0 ? void 0 : responses.default) {
                result += `      Response: ${generateSchemaTypes(responses.default.content['application/json'].schema, 8)}`;
            }
            result += '    }\n';
        }
    }
    return result + '  }\n}';
}

exports.generateSchemaTypes = generateSchemaTypes;
exports.generateTypes = generateTypes;
