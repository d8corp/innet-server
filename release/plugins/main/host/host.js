'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useHost = require('../../../hooks/useHost/useHost.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const host = () => {
    const handler = innet.useNewHandler();
    const { docs } = useApi.useApi();
    const props = jsx.useProps();
    const children = jsx.useChildren();
    const { operation } = jsx.useContext(useEndpoint.endpointContext) || {};
    const target = operation || docs;
    if (!target.servers) {
        target.servers = [];
    }
    const { servers } = operation || docs;
    const server = Object.assign({}, props);
    // @ts-expect-error: FIXME
    servers.push(server);
    handler[useHost.hostContext.key] = { server };
    innet__default["default"](children, handler);
};

exports.host = host;
