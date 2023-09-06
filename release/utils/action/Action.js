'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var cookieLib = require('cookie');
var requestIp = require('request-ip');
require('../decorators/index.js');
require('../parseBody/index.js');
require('../parseFormBody/index.js');
require('../parseSearch/index.js');
var constants = require('../../constants.js');
var parseSearch = require('../parseSearch/parseSearch.js');
var parseFormBody = require('../parseFormBody/parseFormBody.js');
var parseBody = require('../parseBody/parseBody.js');
var once = require('../decorators/once/once.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cookieLib__default = /*#__PURE__*/_interopDefaultLegacy(cookieLib);

const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/;
let Action = (() => {
    var _a, _Action_search, _Action_headers, _Action_cookie;
    let _instanceExtraInitializers = [];
    let _get_parsedUrl_decorators;
    let _get_originSearch_decorators;
    let _get_originCookies_decorators;
    let _get_bodyType_decorators;
    let _parseBody_decorators;
    let _get_clientIp_decorators;
    return _a = class Action {
            constructor(req, res) {
                this.req = (tslib.__runInitializers(this, _instanceExtraInitializers), req);
                this.res = res;
                _Action_search.set(this, void 0);
                _Action_headers.set(this, {});
                _Action_cookie.set(this, {});
            }
            get parsedUrl() {
                var _a;
                const match = (_a = this.req.url) === null || _a === void 0 ? void 0 : _a.match(URL_PARSER);
                if (!match)
                    throw Error('cannot parse url');
                const result = match.groups;
                result.path = result.path
                    .replaceAll(/\/\.\.\//g, '/')
                    .replaceAll(/\/+/g, '/');
                return result;
            }
            get path() {
                return this.parsedUrl.path;
            }
            get originSearch() {
                return parseSearch.parseSearch(this.parsedUrl.search);
            }
            get search() {
                if (tslib.__classPrivateFieldGet(this, _Action_search, "f"))
                    return tslib.__classPrivateFieldGet(this, _Action_search, "f");
                tslib.__classPrivateFieldSet(this, _Action_search, this.originSearch, "f");
                return tslib.__classPrivateFieldGet(this, _Action_search, "f");
            }
            set search(value) {
                tslib.__classPrivateFieldSet(this, _Action_search, value, "f");
            }
            get originHeaders() {
                return this.req.headers;
            }
            get headers() {
                if (tslib.__classPrivateFieldGet(this, _Action_headers, "f"))
                    return tslib.__classPrivateFieldGet(this, _Action_headers, "f");
                tslib.__classPrivateFieldSet(this, _Action_headers, this.originHeaders, "f");
                return tslib.__classPrivateFieldGet(this, _Action_headers, "f");
            }
            set headers(value) {
                tslib.__classPrivateFieldSet(this, _Action_headers, value, "f");
            }
            get originCookies() {
                var _a;
                return cookieLib__default["default"].parse((_a = this.req.headers.cookie) !== null && _a !== void 0 ? _a : '');
            }
            get cookies() {
                if (tslib.__classPrivateFieldGet(this, _Action_cookie, "f"))
                    return tslib.__classPrivateFieldGet(this, _Action_cookie, "f");
                tslib.__classPrivateFieldSet(this, _Action_cookie, this.originCookies, "f");
                return tslib.__classPrivateFieldGet(this, _Action_cookie, "f");
            }
            set cookies(value) {
                tslib.__classPrivateFieldSet(this, _Action_cookie, value, "f");
            }
            get bodyType() {
                const headerType = this.req.headers['content-type'];
                if (!headerType)
                    return;
                for (const bodyType of constants.allBodyTypes) {
                    if (headerType.startsWith(bodyType)) {
                        return bodyType;
                    }
                }
            }
            parseBody() {
                return tslib.__awaiter(this, void 0, void 0, function* () {
                    if (!this.bodyType) {
                        return;
                    }
                    if (this.bodyType === 'multipart/form-data') {
                        this.body = yield parseFormBody.parseFormBody(this.req);
                    }
                    if (this.bodyType === 'application/x-www-form-urlencoded') {
                        this.body = parseSearch.parseSearch(yield parseBody.parseBody(this.req));
                    }
                    if (this.bodyType === 'application/json') {
                        this.body = JSON.parse(yield parseBody.parseBody(this.req));
                    }
                });
            }
            setCookie(name, value, options) {
                let cookies = this.res.getHeader('Set-Cookie');
                if (typeof cookies === 'string') {
                    cookies = [cookies];
                }
                const normValue = typeof value === 'string' ? cookieLib__default["default"].serialize(name, value, options) : `${name}=; max-age=0`;
                if (cookies) {
                    cookies.push(normValue);
                }
                else {
                    cookies = normValue;
                }
                this.res.setHeader('Set-Cookie', cookies);
            }
            get clientIp() {
                return requestIp.getClientIp(this.req);
            }
        },
        _Action_search = new WeakMap(),
        _Action_headers = new WeakMap(),
        _Action_cookie = new WeakMap(),
        (() => {
            _get_parsedUrl_decorators = [once.once];
            _get_originSearch_decorators = [once.once];
            _get_originCookies_decorators = [once.once];
            _get_bodyType_decorators = [once.once];
            _parseBody_decorators = [once.once];
            _get_clientIp_decorators = [once.once];
            tslib.__esDecorate(_a, null, _get_parsedUrl_decorators, { kind: "getter", name: "parsedUrl", static: false, private: false, access: { has: obj => "parsedUrl" in obj, get: obj => obj.parsedUrl } }, null, _instanceExtraInitializers);
            tslib.__esDecorate(_a, null, _get_originSearch_decorators, { kind: "getter", name: "originSearch", static: false, private: false, access: { has: obj => "originSearch" in obj, get: obj => obj.originSearch } }, null, _instanceExtraInitializers);
            tslib.__esDecorate(_a, null, _get_originCookies_decorators, { kind: "getter", name: "originCookies", static: false, private: false, access: { has: obj => "originCookies" in obj, get: obj => obj.originCookies } }, null, _instanceExtraInitializers);
            tslib.__esDecorate(_a, null, _get_bodyType_decorators, { kind: "getter", name: "bodyType", static: false, private: false, access: { has: obj => "bodyType" in obj, get: obj => obj.bodyType } }, null, _instanceExtraInitializers);
            tslib.__esDecorate(_a, null, _parseBody_decorators, { kind: "method", name: "parseBody", static: false, private: false, access: { has: obj => "parseBody" in obj, get: obj => obj.parseBody } }, null, _instanceExtraInitializers);
            tslib.__esDecorate(_a, null, _get_clientIp_decorators, { kind: "getter", name: "clientIp", static: false, private: false, access: { has: obj => "clientIp" in obj, get: obj => obj.clientIp } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();

exports.Action = Action;
exports.URL_PARSER = URL_PARSER;
