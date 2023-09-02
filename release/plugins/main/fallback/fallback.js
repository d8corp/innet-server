'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');

const fallback = () => {
    const api = useApi.useApi();
    if (!api) {
        throw Error('Use <fallback> inside <api>');
    }
    if (api.fallback) {
        throw Error('<fallback> MUST be used once on an <api>');
    }
    const children = jsx.useChildren();
    const handler = innet.useHandler();
    api.fallback = { children, handler };
};

exports.fallback = fallback;
