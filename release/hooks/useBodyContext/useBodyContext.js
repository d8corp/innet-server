'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../useThrow/index.js');
var useThrow = require('../useThrow/useThrow.js');

const bodyContext = new jsx.Context();
function useBodyContext() {
    const context = jsx.useContext(bodyContext);
    if (!context) {
        useThrow.useThrow('<{type}> MUST be in <body>');
    }
    return context;
}

exports.bodyContext = bodyContext;
exports.useBodyContext = useBodyContext;
