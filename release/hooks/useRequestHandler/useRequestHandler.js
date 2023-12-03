'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const requestHandlerContext = new jsx.Context();
function useRequestHandler() {
    const handler = jsx.useContext(requestHandlerContext);
    if (!handler) {
        useThrow.useThrow('You cannot use useRequestHandler inside {type}, this hook can be used only in a request component');
    }
    return handler;
}

exports.requestHandlerContext = requestHandlerContext;
exports.useRequestHandler = useRequestHandler;
