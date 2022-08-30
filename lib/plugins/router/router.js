'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var Action = require('../../action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function getMatchReg(props) {
    var ish = props.ish, path = props.path;
    return "^".concat(path ? "".concat(path).concat(ish ? '(/[^?]*)?' : '') : '[^?]*', "(\\?.*)?$");
}
var ROUTER = Symbol('Parent Router');
function useRouter() {
    return jsx.useHandler()[ROUTER];
}
function router(_a, handler) {
    var _b;
    var props = _a.props, children = _a.children;
    if (!children)
        return;
    if (!props)
        return children;
    var action = handler[Action.ACTION];
    var req = action.req;
    if (!req) {
        throw Error('`router` should be used inside `server`');
    }
    if (props.method && props.method !== req.method) {
        return;
    }
    var parent = handler[ROUTER];
    var parentPrefix = (parent === null || parent === void 0 ? void 0 : parent.prefix) || '';
    if (parentPrefix && !req.url.startsWith(parentPrefix)) {
        return;
    }
    var url = parentPrefix ? req.url.slice(parentPrefix.length) : req.url;
    var newHandler = Object.create(handler);
    var current = newHandler[ROUTER] = Object.create(parent || null);
    if (props.prefix) {
        current.prefix = parentPrefix + props.prefix;
    }
    if (props.path || props.search) {
        var urlReg = new RegExp(getMatchReg(props));
        if (urlReg.test(url)) {
            current.params = url.match(urlReg).groups;
        }
        else
            return;
    }
    (_b = props.onMatch) === null || _b === void 0 ? void 0 : _b.call(props, action);
    return innet__default["default"](children.length > 1 ? children : children[0], newHandler);
}

exports.ROUTER = ROUTER;
exports.getMatchReg = getMatchReg;
exports.router = router;
exports.useRouter = useRouter;
