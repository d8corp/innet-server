'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');
var useHost = require('../../../hooks/useHost/useHost.js');

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
    const server = {
        ...props,
    };
    servers.push(server);
    handler[useHost.hostContext.key] = { server };
    innet.innet(children, handler);
};

exports.host = host;
