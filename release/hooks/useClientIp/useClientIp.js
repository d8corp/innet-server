'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var requestIp = require('request-ip');
require('../useRequest/index.js');
require('../useThrow/index.js');
var useRequest = require('../useRequest/useRequest.js');
var useThrow = require('../useThrow/useThrow.js');

function useClientIp() {
    const req = useRequest.useRequest();
    if (!req) {
        useThrow.useThrow('<{type}> MUST be in <request> or <fallback>');
    }
    return requestIp.getClientIp(req);
}

exports.useClientIp = useClientIp;
