'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useAction = require('../useAction/useAction.js');

function useCookies() {
    return useAction.useAction().cookies;
}

exports.useCookies = useCookies;
