'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var accessContext = new jsx.Context({});
function access(_a, handler) {
    var props = _a.props, children = _a.children;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <access> inside <action>');
    }
    var handleRole = accessContext.get(handler).handleRole;
    var role = props === null || props === void 0 ? void 0 : props.role;
    if (!handleRole) {
        return innet__default["default"](children, handler);
    }
    var error = handleRole(role, handler);
    if (error) {
        return innet__default["default"](error, handler);
    }
    return innet__default["default"](children, handler);
}

exports.access = access;
exports.accessContext = accessContext;
