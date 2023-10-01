'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var JSONString = require('../../../utils/JSONString/JSONString.js');

const errorStatuses = {
    aTimeoutOccurred: 524,
    authenticationTimeout: 419,
    badGateway: 502,
    badRequest: 400,
    bandwidthLimitExceeded: 509,
    clientClosedRequest: 499,
    conflict: 409,
    connectionTimedOut: 522,
    expectationFailed: 417,
    failedDependency: 424,
    forbidden: 403,
    gatewayTimeout: 504,
    gone: 410,
    HTTPVersionNotSupported: 505,
    imATeapot: 418,
    insufficientStorage: 507,
    internalServerError: 500,
    invalidSSLCertificate: 526,
    lengthRequired: 411,
    locked: 423,
    loopDetected: 508,
    methodNotAllowed: 405,
    misdirectedRequest: 421,
    networkAuthenticationRequired: 511,
    notAcceptable: 406,
    notExtended: 510,
    notFound: 404,
    notImplemented: 501,
    originIsUnreachable: 523,
    payloadTooLarge: 413,
    paymentRequired: 402,
    preconditionFailed: 412,
    preconditionRequired: 428,
    proxyAuthenticationRequired: 407,
    rangeNotSatisfiable: 416,
    requestHeaderFieldsTooLarge: 431,
    requestTimeout: 408,
    retryWith: 449,
    serviceUnavailable: 503,
    SSLHandshakeFailed: 525,
    tooEarly: 425,
    tooManyRequests: 429,
    unauthorized: 401,
    unavailableForLegalReasons: 451,
    unknownError: 520,
    unprocessableEntity: 422,
    unsupportedMediaType: 415,
    upgradeRequired: 426,
    URITooLong: 414,
    variantAlsoNegotiates: 506,
    webServerIsDown: 521,
};
const error = () => {
    const [children] = (jsx.useChildren()) || [];
    const props = jsx.useProps();
    const res = useResponse.useResponse();
    if (!res) {
        throw Error('<error> MUST be in <request>');
    }
    const { code = 'undefined', status = 520, } = props || {};
    res.statusCode = typeof status === 'string' ? errorStatuses[status] : status;
    res.write(JSONString.JSONString({ data: children, error: code }));
    res.end();
};

exports.error = error;
exports.errorStatuses = errorStatuses;
