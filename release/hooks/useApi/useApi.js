'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');

const apiContext = new jsx.Context();
function useApi() {
    const api = jsx.useContext(apiContext);
    if (!api) {
        throw Error('Use `useApi` in <api>');
    }
    return api;
}

exports.apiContext = apiContext;
exports.useApi = useApi;
