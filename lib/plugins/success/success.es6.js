import innet from 'innet';
import { ACTION } from '../../action/Action/Action.es6.js';

const successStatuses = {
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
function success({ props, children }, handler) {
    const { res } = handler[ACTION];
    const status = props === null || props === void 0 ? void 0 : props.status;
    res.statusCode = status
        ? successStatuses[status] || status
        : children
            ? 200
            : 204;
    const data = innet(children, handler);
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return data !== null && data !== void 0 ? data : null;
}

export { success, successStatuses };
