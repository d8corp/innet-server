import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { useResponse } from '../../../hooks/useResponse/useResponse.mjs';
import { JSONString } from '../../../utils/JSONString/JSONString.mjs';

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
    const { children, status, type, } = useProps();
    const res = useResponse();
    if (!res) {
        throw Error('<success> MUST be in <request>');
    }
    res.statusCode = typeof status === 'string' ? successStatuses[status] : status !== null && status !== void 0 ? status : ((children) ? 200 : 204);
    if (children) {
        const child = children;
        const contentType = type || (['bigint', 'boolean', 'number', 'string'].includes(typeof child)
            ? 'text/plain; charset=utf-8'
            : 'application/json');
        const content = contentType.startsWith('application/json') ? JSONString(child) : String(child);
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Length', Buffer.byteLength(content));
        res.write(content, 'utf-8');
    }
    res.end();
};

export { success, successStatuses };
