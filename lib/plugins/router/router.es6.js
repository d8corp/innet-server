import innet from 'innet';
import { useHandler } from '@innet/jsx';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

function getMatchReg(props) {
    const { ish, path } = props;
    return `^${path}${ish ? '(?<rest>/.*)?' : ''}$`;
}
const ROUTER = Symbol('Parent Router');
function useRouter() {
    return useHandler()[ROUTER];
}
function router({ props, children }, handler) {
    var _a;
    if (!children)
        return;
    if (!props)
        return children;
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <router> inside <action>');
    }
    const { req, path } = action;
    if (props.method && props.method !== req.method) {
        return;
    }
    const parent = handler[ROUTER];
    const parentPrefix = (parent === null || parent === void 0 ? void 0 : parent.prefix) || '';
    if (parentPrefix && !path.startsWith(parentPrefix)) {
        return;
    }
    const url = parentPrefix ? path.slice(parentPrefix.length) : path;
    const newHandler = Object.create(handler);
    const current = newHandler[ROUTER] = Object.create(parent || null);
    if (props.prefix) {
        current.prefix = parentPrefix + props.prefix;
    }
    if (props.path) {
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

export { ROUTER, getMatchReg, router, useRouter };
