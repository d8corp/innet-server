'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useTag = require('../../../hooks/useTag/useTag.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var getEndpoint = require('../../../utils/getEndpoint/getEndpoint.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useServerPlugins = require('../../../hooks/useServerPlugins/useServerPlugins.js');

const endpoint = () => {
    const handler = innet.useNewHandler();
    const tag = useTag.useTag();
    const props = jsx.useProps();
    const { docs, endpoints, } = useApi.useApi();
    const { children, deprecated, description, method, operationId, path, private: privateMode, summary, } = props;
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
        endpoints[method] = { key: '', plugins: new Set() };
    }
    const endpoint = getEndpoint.getEndpoint(path, endpoints[method]);
    useEndpoint.endpointContext.set(handler, { endpoint, operation, props });
    useServerPlugins.serverPlugins.set(handler, endpoint.plugins);
    innet.innet(children, handler);
};

exports.endpoint = endpoint;
