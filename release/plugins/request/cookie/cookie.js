'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
var cookie$1 = require('cookie');
require('../../../hooks/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var useThrow = require('../../../hooks/useThrow/useThrow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cookie__default = /*#__PURE__*/_interopDefaultLegacy(cookie$1);

const cookie = () => {
    const res = useResponse.useResponse();
    if (!res) {
        useThrow.useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    const _a = jsx.useProps(), { key, value } = _a, opt = tslib.__rest(_a, ["key", "value"]);
    let cookies = res.getHeader('Set-Cookie');
    if (typeof cookies === 'string') {
        cookies = [cookies];
    }
    const normValue = typeof value === 'string' ? cookie__default["default"].serialize(key, value, opt) : `${key}=; max-age=0`;
    if (cookies) {
        cookies.push(normValue);
    }
    else {
        cookies = normValue;
    }
    res.setHeader('Set-Cookie', cookies);
};

exports.cookie = cookie;
