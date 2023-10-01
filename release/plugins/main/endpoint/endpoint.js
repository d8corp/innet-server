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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const endpoint = () => {
    const handler = innet.useNewHandler();
    const tag = useTag.useTag();
    const { docs, endpoints, } = useApi.useApi();
    const props = jsx.useProps();
    const { deprecated, description, method, path, private: privateMode, summary, } = props;
    const children = jsx.useChildren();
    const { paths } = docs;
    if (!paths)
        throw Error('cannot find paths in docs');
    if (!paths[path]) {
        paths[path] = {};
    }
    // @ts-expect-error: it's always an object
    if (paths[path][method]) {
        throw Error(`You cannot use the same endpoints ${method}:${path}`);
    }
    const operation = {};
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
        // @ts-expect-error: it's always an object
        paths[path][method] = operation;
    }
    if (!endpoints[method]) {
        endpoints[method] = { key: '', plugins: new Set() };
    }
    // @ts-expect-error: it's always an object
    const endpoint = getEndpoint.getEndpoint(path, endpoints[method]);
    // @ts-expect-error: it's always an object
    useEndpoint.endpointContext.set(handler, { endpoint, operation, props });
    // @ts-expect-error: it's always an object
    useServerPlugins.serverPlugins.set(handler, endpoint.plugins);
    innet__default["default"](children, handler);
};

exports.endpoint = endpoint;
