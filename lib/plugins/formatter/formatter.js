'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function formatter(_a, handler) {
    var props = _a.props, children = _a.children;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <formatter> inside <action>');
    }
    var map = props.map, _b = props.resource, resource = _b === void 0 ? 'body' : _b;
    var run = function () {
        var e_1, _a;
        var data = action[resource];
        if (!data)
            throw Error("cannot find ".concat(resource, " in action"));
        for (var key in map) {
            if (key in data) {
                try {
                    for (var _b = (e_1 = void 0, tslib.__values(map[key])), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var format = _c.value;
                        data[key] = format(data[key]);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        }
        return innet__default["default"](children, handler);
    };
    if (resource === 'body' || resource === 'files') {
        return action.parseBody().then(run);
    }
    return run();
}

exports.formatter = formatter;
