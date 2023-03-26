'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function cookie(_a, handler) {
    var _b = _a.props, key = _b.key, value = _b.value, opt = tslib.__rest(_b, ["key", "value"]), children = _a.children;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <cookie> inside <action>');
    }
    if (value === undefined) {
        action.setCookie(key, '', tslib.__assign({ path: '/', expires: new Date(0) }, opt));
    }
    else {
        action.setCookie(key, value, opt);
    }
    return innet__default["default"](children, handler);
}

exports.cookie = cookie;
