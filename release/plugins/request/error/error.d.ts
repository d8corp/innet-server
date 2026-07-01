import { type HandlerPlugin } from 'innet';
export declare const errorStatuses: {
    readonly aTimeoutOccurred: 524;
    readonly authenticationTimeout: 419;
    readonly badGateway: 502;
    readonly badRequest: 400;
    readonly bandwidthLimitExceeded: 509;
    readonly clientClosedRequest: 499;
    readonly conflict: 409;
    readonly connectionTimedOut: 522;
    readonly expectationFailed: 417;
    readonly failedDependency: 424;
    readonly forbidden: 403;
    readonly gatewayTimeout: 504;
    readonly gone: 410;
    readonly HTTPVersionNotSupported: 505;
    readonly imATeapot: 418;
    readonly insufficientStorage: 507;
    readonly internalServerError: 500;
    readonly invalidSSLCertificate: 526;
    readonly lengthRequired: 411;
    readonly locked: 423;
    readonly loopDetected: 508;
    readonly methodNotAllowed: 405;
    readonly misdirectedRequest: 421;
    readonly networkAuthenticationRequired: 511;
    readonly notAcceptable: 406;
    readonly notExtended: 510;
    readonly notFound: 404;
    readonly notImplemented: 501;
    readonly originIsUnreachable: 523;
    readonly payloadTooLarge: 413;
    readonly paymentRequired: 402;
    readonly preconditionFailed: 412;
    readonly preconditionRequired: 428;
    readonly proxyAuthenticationRequired: 407;
    readonly rangeNotSatisfiable: 416;
    readonly requestHeaderFieldsTooLarge: 431;
    readonly requestTimeout: 408;
    readonly retryWith: 449;
    readonly serviceUnavailable: 503;
    readonly SSLHandshakeFailed: 525;
    readonly tooEarly: 425;
    readonly tooManyRequests: 429;
    readonly unauthorized: 401;
    readonly unavailableForLegalReasons: 451;
    readonly unknownError: 520;
    readonly unprocessableEntity: 422;
    readonly unsupportedMediaType: 415;
    readonly upgradeRequired: 426;
    readonly URITooLong: 414;
    readonly variantAlsoNegotiates: 506;
    readonly webServerIsDown: 521;
};
export type ErrorStatuses = keyof typeof errorStatuses;
export interface ErrorProps {
    /**
     * Error data to send to the client.
     *
     * @example
     * ```tsx
     * <error status="notFound" code="userNotFound">
     *   {{ message: 'User not found' }}
     * </error>
     * ```
     */
    children?: any;
    /**
     * Unique error code identifier.
     *
     * @default 'undefined'
     *
     * @example
     * ```tsx
     * <error status="badRequest" code="invalidEmail">
     *   {{ message: 'Invalid email format' }}
     * </error>
     * ```
     */
    code?: string;
    /**
     * HTTP status code for the error response.
     *
     * @default 520 (unknownError)
     *
     * @example
     * ```tsx
     * <error status="notFound" />
     * ```
     * @example
     * ```tsx
     * <error status={404} code="resourceNotFound" />
     * ```
     */
    status?: ErrorStatuses | number;
}
export declare const error: HandlerPlugin;
