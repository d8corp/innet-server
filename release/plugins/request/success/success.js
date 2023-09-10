'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var JSONString = require('../../../utils/JSONString/JSONString.js');

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
    const children = jsx.useChildren();
    const { status, type } = jsx.useProps() || {};
    const res = useResponse.useResponse();
    if (!res) {
        throw Error('<success> MUST be in <request>');
    }
    res.statusCode = typeof status === 'string' ? successStatuses[status] : status !== null && status !== void 0 ? status : ((children) ? 200 : 204);
    if (children === null || children === void 0 ? void 0 : children[0]) {
        const child = children[0];
        const contentType = type || (['string', 'number', 'boolean', 'bigint'].includes(typeof child)
            ? 'text/plain'
            : 'application/json');
        res.setHeader('Content-Type', contentType);
        if (contentType === 'application/json') {
            res.write(JSONString.JSONString(child));
        }
        else {
            res.write(String(child));
        }
    }
    res.end();
};

exports.success = success;
exports.successStatuses = successStatuses;
