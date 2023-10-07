'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const serverHttpsContext = new jsx.Context();
function useIsServerHttps() {
    const https = jsx.useContext(serverHttpsContext);
    if (https === undefined) {
        useThrow.useThrow('{type} MUST BE in <server>');
    }
    return https;
}

exports.serverHttpsContext = serverHttpsContext;
exports.useIsServerHttps = useIsServerHttps;
