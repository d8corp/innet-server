'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var JSONString = require('../../../utils/JSONString/JSONString.js');

const errorStatuses = {
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
const error = () => {
    const [children] = (jsx.useChildren()) || [];
    const props = jsx.useProps();
    const res = useResponse.useResponse();
    if (!res) {
        throw Error('<error> MUST be in <request>');
    }
    const { status = 520, code = 'undefined' } = props || {};
    res.statusCode = typeof status === 'string' ? errorStatuses[status] : status;
    res.write(JSONString.JSONString({ error: code, data: children }));
    res.end();
};

exports.error = error;
exports.errorStatuses = errorStatuses;
