'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var watchState = require('watch-state');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const serverFn = () => {
    return () => {
        const handler = innet.useHandler();
        const fn = innet.useApp();
        new watchState.Watch(update => {
            innet__default["default"](fn(update), handler);
        });
    };
};

exports.serverFn = serverFn;
