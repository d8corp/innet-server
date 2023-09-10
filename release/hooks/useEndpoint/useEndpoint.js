'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const endpointContext = new jsx.Context();
function useEndpoint() {
    const endpoint = jsx.useContext(endpointContext);
    if (!endpoint) {
        useThrow.useThrow('Use <{type}> in <endpoint>');
    }
    return endpoint;
}

exports.endpointContext = endpointContext;
exports.useEndpoint = useEndpoint;
