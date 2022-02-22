import innet from 'innet';
import { ACTION } from '../../action/Action/Action.es6.js';

function getMatchReg(props) {
    const { ish, path } = props;
    return `^${path ? `${path}${ish ? '(/[^?]*)?' : ''}` : '[^?]*'}(\\?.*)?$`;
}
const ROUTER = Symbol('Parent Router');
function withRouter(target) {
    const originInit = target.prototype.init;
    target.prototype.init = function init(...args) {
        this.router = args[2][ROUTER];
        return originInit.apply(this, args);
    };
    return target;
}
function router({ props, children }, handler) {
    var _a;
    if (!children)
        return;
    if (!props)
        return children;
    const action = handler[ACTION];
    const { req } = action;
    if (!req) {
        throw Error('`router` should be used inside `server`');
    }
    if (props.method && props.method !== req.method) {
        return;
    }
    const parent = handler[ROUTER];
    const parentPrefix = (parent === null || parent === void 0 ? void 0 : parent.prefix) || '';
    if (parentPrefix && !req.url.startsWith(parentPrefix)) {
        return;
    }
    const url = parentPrefix ? req.url.slice(parentPrefix.length) : req.url;
    const newHandler = Object.create(handler);
    const current = newHandler[ROUTER] = Object.create(parent || null);
    if (props.prefix) {
        current.prefix = parentPrefix + props.prefix;
    }
    if (props.path || props.search) {
        const urlReg = new RegExp(getMatchReg(props));
        if (urlReg.test(url)) {
            current.params = url.match(urlReg).groups;
        }
        else
            return;
    }
    (_a = props.onMatch) === null || _a === void 0 ? void 0 : _a.call(props, action);
    return innet(children.length > 1 ? children : children[0], newHandler);
}

export { ROUTER, getMatchReg, router, withRouter };
