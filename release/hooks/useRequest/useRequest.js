'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const requestContext = new jsx.Context();
function useRequest() {
    return jsx.useContext(requestContext);
}

exports.requestContext = requestContext;
exports.useRequest = useRequest;
