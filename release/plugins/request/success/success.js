'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var JSONString = require('../../../utils/JSONString/JSONString.js');

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
    const children = jsx.useChildren();
    const { status, type, } = jsx.useProps() || {};
    const res = useResponse.useResponse();
    if (!res) {
        throw Error('<success> MUST be in <request>');
    }
    res.statusCode = typeof status === 'string' ? successStatuses[status] : status !== null && status !== void 0 ? status : ((children) ? 200 : 204);
    if (children === null || children === void 0 ? void 0 : children[0]) {
        const child = children[0];
        const contentType = type || (['bigint', 'boolean', 'number', 'string'].includes(typeof child)
            ? 'text/plain'
            : 'application/json');
        const content = contentType === 'application/json' ? JSONString.JSONString(child) : String(child);
        res.setHeader('Content-Type', contentType);
        res.setHeader('Content-Length', content.length);
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
