import { __rest } from 'tslib';
import innet from 'innet';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

function cookie(_a, handler) {
    var _b = _a.props, { key, value } = _b, opt = __rest(_b, ["key", "value"]), { children } = _a;
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <cookie> inside <action>');
    }
    if (value === undefined) {
        action.setCookie(key, '', Object.assign({ path: '/', expires: new Date(0) }, opt));
    }
    else {
        action.setCookie(key, value, opt);
    }
    return innet(children, handler);
}

export { cookie };
