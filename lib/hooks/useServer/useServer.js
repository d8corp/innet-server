'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

var serverContext = new jsx.Context();
function useServer() {
    var server = jsx.useContext(serverContext);
    if (!server) {
        throw Error('Use `useServer` in <server>');
    }
    return server;
}

exports.serverContext = serverContext;
exports.useServer = useServer;
