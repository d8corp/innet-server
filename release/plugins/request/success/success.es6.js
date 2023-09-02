import { useChildren, useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { JSONString } from '../../../utils/JSONString/JSONString.es6.js';

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
const success = () => {
    const children = useChildren();
    const props = useProps();
    const res = useResponse();
    const status = props === null || props === void 0 ? void 0 : props.status;
    if (!res) {
        throw Error('<success> MUST be in <request>');
    }
    res.statusCode = typeof status === 'string' ? successStatuses[status] : status !== null && status !== void 0 ? status : ((children) ? 200 : 204);
    if (children) {
        res.write(JSONString(children[0]));
    }
    res.end();
};

export { success, successStatuses };
