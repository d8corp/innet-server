import { useChildren, useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { JSONString } from '../../../utils/JSONString/JSONString.es6.js';

const successStatuses = {
    accepted: 202,
    alreadyReported: 208,
    created: 201,
    multiStatus: 207,
    noContent: 204,
    ok: 200,
    outside: 203,
    partialContent: 206,
    resetContent: 205,
};
const success = () => {
    const children = useChildren();
    const { status, type, } = useProps() || {};
    const res = useResponse();
    if (!res) {
        throw Error('<success> MUST be in <request>');
    }
    res.statusCode = typeof status === 'string' ? successStatuses[status] : status !== null && status !== void 0 ? status : ((children) ? 200 : 204);
    if (children === null || children === void 0 ? void 0 : children[0]) {
        const child = children[0];
        const contentType = type || (['bigint', 'boolean', 'number', 'string'].includes(typeof child)
            ? 'text/plain'
            : 'application/json');
        res.setHeader('Content-Type', contentType);
        if (contentType === 'application/json') {
            res.write(JSONString(child));
        }
        else {
            res.write(String(child));
        }
    }
    res.end();
};

export { success, successStatuses };
