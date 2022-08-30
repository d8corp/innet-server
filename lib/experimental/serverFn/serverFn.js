'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var watchState = require('watch-state');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function serverFn() {
    return function (fn, next, handler) {
        var result;
        new watchState.Watch(function (update) { return (result = innet__default["default"](fn(update), handler)); });
        return result;
    };
}

exports.serverFn = serverFn;
