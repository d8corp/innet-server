'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../useAction/index.js');
var useAction = require('../useAction/useAction.js');

function useCookies() {
    return useAction.useAction().cookies;
}

exports.useCookies = useCookies;
