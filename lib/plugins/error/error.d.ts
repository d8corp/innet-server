export declare const errorStatuses: {
    readonly badRequest: 400;
    readonly unauthorized: 401;
    readonly paymentRequired: 402;
    readonly forbidden: 403;
    readonly notFound: 404;
    readonly methodNotAllowed: 405;
    readonly notAcceptable: 406;
    readonly proxyAuthenticationRequired: 407;
    readonly requestTimeout: 408;
    readonly conflict: 409;
    readonly gone: 410;
    readonly lengthRequired: 411;
    readonly preconditionFailed: 412;
    readonly payloadTooLarge: 413;
    readonly URITooLong: 414;
    readonly unsupportedMediaType: 415;
    readonly rangeNotSatisfiable: 416;
    readonly expectationFailed: 417;
    readonly imATeapot: 418;
    readonly authenticationTimeout: 419;
    readonly misdirectedRequest: 421;
    readonly unprocessableEntity: 422;
    readonly locked: 423;
    readonly failedDependency: 424;
    readonly tooEarly: 425;
    readonly upgradeRequired: 426;
    readonly preconditionRequired: 428;
    readonly tooManyRequests: 429;
    readonly requestHeaderFieldsTooLarge: 431;
    readonly retryWith: 449;
    readonly unavailableForLegalReasons: 451;
    readonly clientClosedRequest: 499;
    readonly internalServerError: 500;
    readonly notImplemented: 501;
    readonly badGateway: 502;
    readonly serviceUnavailable: 503;
    readonly gatewayTimeout: 504;
    readonly HTTPVersionNotSupported: 505;
    readonly variantAlsoNegotiates: 506;
    readonly insufficientStorage: 507;
    readonly loopDetected: 508;
    readonly bandwidthLimitExceeded: 509;
    readonly notExtended: 510;
    readonly networkAuthenticationRequired: 511;
    readonly unknownError: 520;
    readonly webServerIsDown: 521;
    readonly connectionTimedOut: 522;
    readonly originIsUnreachable: 523;
    readonly aTimeoutOccurred: 524;
    readonly SSLHandshakeFailed: 525;
    readonly invalidSSLCertificate: 526;
};
export declare type ErrorStatuses = keyof typeof errorStatuses;
export interface ErrorProps {
    status?: ErrorStatuses | number;
}
export declare function error({ props, children }: {
    props: any;
    children: any;
}, handler: any): any;
