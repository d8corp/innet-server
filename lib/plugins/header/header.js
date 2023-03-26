'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function header(_a, handler) {
    var _b = _a.props, name = _b.name, value = _b.value, children = _a.children;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <header> inside <action>');
    }
    action.res.setHeader(name, value);
    return innet__default["default"](children, handler);
}

exports.header = header;
