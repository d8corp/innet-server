'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var utils = require('@cantinc/utils');
var jsx = require('@innet/jsx');
var Action = require('../../action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var validationContext = new jsx.Context({});
function validation(_a, handler) {
    var props = _a.props, children = _a.children;
    var action = handler[Action.ACTION];
    if (!action) {
        throw Error('`validation` should be inside `server`');
    }
    var map = props.map, _b = props.resource, resource = _b === void 0 ? 'body' : _b;
    var run = function () {
        var data = action[resource];
        if (!data)
            throw Error("cannot find ".concat(resource, " in action"));
        var result = utils.validation(map, data);
        if (result) {
            var handleError = validationContext.get(handler).handleError;
            return handleError ? innet__default["default"](handleError(result), handler) : undefined;
        }
        return innet__default["default"](children, handler);
    };
    if (resource === 'body' || resource === 'files') {
        return action.parseBody().then(run);
    }
    return run();
}

exports.validation = validation;
exports.validationContext = validationContext;
