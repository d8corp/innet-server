'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var errorStatuses = {
    badRequest: 400,
    unauthorized: 401,
    paymentRequired: 402,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    notAcceptable: 406,
    proxyAuthenticationRequired: 407,
    requestTimeout: 408,
    conflict: 409,
    gone: 410,
    lengthRequired: 411,
    preconditionFailed: 412,
    payloadTooLarge: 413,
    URITooLong: 414,
    unsupportedMediaType: 415,
    rangeNotSatisfiable: 416,
    expectationFailed: 417,
    imATeapot: 418,
    authenticationTimeout: 419,
    misdirectedRequest: 421,
    unprocessableEntity: 422,
    locked: 423,
    failedDependency: 424,
    tooEarly: 425,
    upgradeRequired: 426,
    preconditionRequired: 428,
    tooManyRequests: 429,
    requestHeaderFieldsTooLarge: 431,
    retryWith: 449,
    unavailableForLegalReasons: 451,
    clientClosedRequest: 499,
    internalServerError: 500,
    notImplemented: 501,
    badGateway: 502,
    serviceUnavailable: 503,
    gatewayTimeout: 504,
    HTTPVersionNotSupported: 505,
    variantAlsoNegotiates: 506,
    insufficientStorage: 507,
    loopDetected: 508,
    bandwidthLimitExceeded: 509,
    notExtended: 510,
    networkAuthenticationRequired: 511,
    unknownError: 520,
    webServerIsDown: 521,
    connectionTimedOut: 522,
    originIsUnreachable: 523,
    aTimeoutOccurred: 524,
    SSLHandshakeFailed: 525,
    invalidSSLCertificate: 526,
};
function error(_a, handler) {
    var props = _a.props, children = _a.children;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <error> inside <action>');
    }
    var res = action.res;
    var status = props === null || props === void 0 ? void 0 : props.status;
    res.statusCode = status ? errorStatuses[status] || status : 520;
    var data = innet__default["default"](children, handler);
    if (typeof data === 'object') {
        return JSON.stringify(data);
    }
    return data !== null && data !== void 0 ? data : null;
}

exports.error = error;
exports.errorStatuses = errorStatuses;
