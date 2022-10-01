'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@cantinc/utils');
var jsx = require('@innet/jsx');
var Action = require('../../action/Action/Action.js');

var validationContext = new jsx.Context({
    handleError: function () { },
});
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
        return utils.validation(map, data).then(function (e) {
            if (e) {
                return validationContext.get(handler).handleError(e);
            }
            return children;
        });
    };
    if (resource === 'body' || resource === 'files') {
        return action.parseBody().then(run);
    }
    return run();
}

exports.validation = validation;
exports.validationContext = validationContext;
