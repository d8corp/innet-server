'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var Action = require('../../action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function parseBody(_a, handler) {
    _a.props; var children = _a.children;
    return handler[Action.ACTION].parseBody().then(function () { return innet__default["default"](children, handler); });
}

exports.parseBody = parseBody;
