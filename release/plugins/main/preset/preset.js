'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useServerPlugin = require('../../../hooks/useServerPlugin/useServerPlugin.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function preset() {
    const children = jsx.useChildren();
    useServerPlugin.useServerPlugin(() => {
        innet__default["default"](children, innet.useHandler());
    });
}

exports.preset = preset;
