'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const endpointContext = new jsx.Context();
function useEndpoint() {
    const endpoint = jsx.useContext(endpointContext);
    if (!endpoint) {
        throw Error('useEndpoint MUST be used in <endpoint>');
    }
    return endpoint;
}

exports.endpointContext = endpointContext;
exports.useEndpoint = useEndpoint;
