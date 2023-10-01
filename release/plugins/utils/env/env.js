'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

const env = () => {
    const { is, of = 'NODE_ENV', } = jsx.useProps();
    if (Array.isArray(is) ? is.includes(process.env[of]) : process.env[of] === is) {
        innet__default["default"](jsx.useChildren(), innet.useHandler());
    }
};

exports.env = env;
