'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var Action = require('../../action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var successStatuses = {
    ok: 200,
    created: 201,
    accepted: 202,
    outside: 203,
    noContent: 204,
    resetContent: 205,
    partialContent: 206,
    multiStatus: 207,
    alreadyReported: 208,
};
function success(_a, handler) {
    var props = _a.props, children = _a.children;
    var res = handler[Action.ACTION].res;
    var status = props === null || props === void 0 ? void 0 : props.status;
    res.statusCode = status
        ? successStatuses[status] || status
        : children
            ? 200
            : 204;
    var data = innet__default["default"](children, handler);
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return data !== null && data !== void 0 ? data : null;
}

exports.success = success;
exports.successStatuses = successStatuses;
