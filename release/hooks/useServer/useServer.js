'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const serverContext = new jsx.Context();
function useServer() {
    const server = jsx.useContext(serverContext);
    if (!server) {
        useThrow.useThrow('Use <{type}> in <server>');
    }
    return server;
}

exports.serverContext = serverContext;
exports.useServer = useServer;
