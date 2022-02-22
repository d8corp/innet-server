'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
var Action = require('../../action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function cookie(_a, handler) {
    var _b = _a.props, key = _b.key, value = _b.value, opt = tslib.__rest(_b, ["key", "value"]), children = _a.children;
    var action = handler[Action.ACTION];
    if (value === undefined) {
        action.setCookie(key, '', tslib.__assign({ path: '/', expires: new Date(0) }, opt));
    }
    else {
        action.setCookie(key, value, opt);
    }
    return innet__default["default"](children, handler);
}

exports.cookie = cookie;
