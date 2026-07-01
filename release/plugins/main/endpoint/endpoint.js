'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var constants = require('../../../constants.js');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useTag = require('../../../hooks/useTag/useTag.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var getEndpoint = require('../../../utils/getEndpoint/getEndpoint.js');
var useEffect = require('../../../hooks/useEffect/useEffect.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useServerPlugins = require('../../../hooks/useServerPlugins/useServerPlugins.js');

function addErrorRequest(errorSchema, response) {
    if (!response) {
        return {
            content: {
                'application/json': {
                    schema: errorSchema,
                },
            },
        };
    }
    if (!('content' in response)) {
        console.error('Cannot find content in response: ', response);
        return response;
    }
    if (!('application/json' in response.content)) {
        response.content['application/json'] = {
            schema: errorSchema,
        };
        return response;
    }
    const schema = response.content['application/json'].schema;
    if (!schema) {
        response.content['application/json'].schema = errorSchema;
        return response;
    }
    if ('oneOf' in schema) {
        schema.oneOf.push(errorSchema);
        return response;
    }
    response.content['application/json'].schema = {
        oneOf: [schema, errorSchema],
    };
    return response;
}
const endpoint = () => {
    const handler = innet.useNewHandler();
    const tag = useTag.useTag();
    const props = jsx.useProps();
    const { docs, endpoints, props: apiProps, } = useApi.useApi();
    const { children, deprecated, description, method, operationId, path, private: privateMode, schemaGeneration = apiProps.schemaGeneration, summary, } = props;
    const { paths } = docs;
    if (!paths)
        throw Error('cannot find paths in docs');
    if (!paths[path]) {
        paths[path] = {};
    }
    if (paths[path][method]) {
        throw Error(`You cannot use the same endpoints ${method}:${path}`);
    }
    const operation = {};
    if (operationId) {
        operation.operationId = operationId;
    }
    if (summary) {
        operation.summary = summary;
    }
    if (description) {
        operation.description = description;
    }
    if (deprecated) {
        operation.deprecated = deprecated;
    }
    if (tag) {
        operation.tags = [tag.name];
    }
    if (!privateMode) {
        paths[path][method] = operation;
    }
    if (!endpoints[method]) {
        endpoints[method] = { key: '', plugins: new Map() };
    }
    const endpoint = getEndpoint.getEndpoint(path, endpoints[method]);
    if (endpoint && schemaGeneration) {
        useEffect.useEffect(() => {
            var _a, _b, _c, _d, _e;
            if (operation.requestBody || ((_a = operation.parameters) === null || _a === void 0 ? void 0 : _a.length)) {
                if (!operation.responses) {
                    operation.responses = {};
                }
                if (!docs.components) {
                    docs.components = {};
                }
                if (!docs.components.schemas) {
                    docs.components.schemas = {};
                }
                const ref = (_c = (_b = apiProps.errorSchemaRefs) === null || _b === void 0 ? void 0 : _b.requestValidation) !== null && _c !== void 0 ? _c : 'ApiValidationError';
                if (!(ref in docs.components.schemas)) {
                    docs.components.schemas[ref] = (_e = (_d = apiProps.errorSchema) === null || _d === void 0 ? void 0 : _d.requestValidation) !== null && _e !== void 0 ? _e : constants.defaultRequestValidationSchema;
                }
                operation.responses[400] = addErrorRequest({ $ref: `#/components/schemas/${ref}` }, operation.responses[400]);
            }
        });
        useEffect.useEffect(() => {
            var _a, _b, _c, _d;
            if (operation.requestBody) {
                if (!operation.responses) {
                    operation.responses = {};
                }
                if (!docs.components) {
                    docs.components = {};
                }
                if (!docs.components.schemas) {
                    docs.components.schemas = {};
                }
                const ref = (_b = (_a = apiProps.errorSchemaRefs) === null || _a === void 0 ? void 0 : _a.requestBodyContentType) !== null && _b !== void 0 ? _b : 'ApiRequestBodyContentTypeError';
                if (!(ref in docs.components.schemas)) {
                    docs.components.schemas[ref] = (_d = (_c = apiProps.errorSchema) === null || _c === void 0 ? void 0 : _c.requestBodyContentType) !== null && _d !== void 0 ? _d : constants.defaultRequestBodyContentTypeSchema;
                }
                operation.responses[400] = addErrorRequest({ $ref: `#/components/schemas/${ref}` }, operation.responses[400]);
            }
        });
    }
    // @ts-expect-error: it's always an object
    useEndpoint.endpointContext.set(handler, { endpoint, operation, props });
    // @ts-expect-error: it's always an object
    useServerPlugins.serverPlugins.set(handler, endpoint.plugins);
    innet.innet(children, handler);
};

exports.endpoint = endpoint;
