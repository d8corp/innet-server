'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useEndpoint = require('../../../hooks/useEndpoint/useEndpoint.js');

const request = () => {
    const endpointContext = useEndpoint.useEndpoint();
    if (!endpointContext) {
        throw Error('Use <request> inside <endpoint>');
    }
    const children = jsx.useChildren();
    const handler = innet.useHandler();
    const { endpoint, props } = endpointContext;
    if (endpoint.content) {
        throw Error(`You cannot use the same endpoints ${props.method}:${props.path}`);
    }
    endpoint.content = children;
    endpoint.handler = handler;
};

exports.request = request;
