'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const responseContext = new jsx.Context();
function useResponse() {
    return jsx.useContext(responseContext);
}

exports.responseContext = responseContext;
exports.useResponse = useResponse;
