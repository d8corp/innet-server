'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const serverPortContext = new jsx.Context();
function useServerPort() {
    const port = jsx.useContext(serverPortContext);
    if (!port) {
        useThrow.useThrow('{type} MUST BE in <server>');
    }
    return port;
}

exports.serverPortContext = serverPortContext;
exports.useServerPort = useServerPort;
