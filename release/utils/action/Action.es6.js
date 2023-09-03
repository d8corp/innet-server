import { __runInitializers, __classPrivateFieldGet, __classPrivateFieldSet, __awaiter, __esDecorate } from 'tslib';
import cookie from 'cookie';
import '../decorators/index.es6.js';
import '../parseBody/index.es6.js';
import '../parseFormBody/index.es6.js';
import '../parseSearch/index.es6.js';
import { allBodyTypes } from '../../constants.es6.js';
import { parseSearch } from '../parseSearch/parseSearch.es6.js';
import { parseFormBody } from '../parseFormBody/parseFormBody.es6.js';
import { parseBody } from '../parseBody/parseBody.es6.js';
import { once } from '../decorators/once/once.es6.js';

const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/;
let Action = (() => {
    var _a, _Action_search, _Action_headers, _Action_cookie;
    let _instanceExtraInitializers = [];
    let _get_parsedUrl_decorators;
    let _get_originSearch_decorators;
    let _get_originCookies_decorators;
    let _get_bodyType_decorators;
    let _parseBody_decorators;
    return _a = class Action {
            constructor(req) {
                this.req = (__runInitializers(this, _instanceExtraInitializers), req);
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
                return parseSearch(this.parsedUrl.search);
            }
            get search() {
                if (__classPrivateFieldGet(this, _Action_search, "f"))
                    return __classPrivateFieldGet(this, _Action_search, "f");
                __classPrivateFieldSet(this, _Action_search, this.originSearch, "f");
                return __classPrivateFieldGet(this, _Action_search, "f");
            }
            set search(value) {
                __classPrivateFieldSet(this, _Action_search, value, "f");
            }
            get originHeaders() {
                return this.req.headers;
            }
            get headers() {
                if (__classPrivateFieldGet(this, _Action_headers, "f"))
                    return __classPrivateFieldGet(this, _Action_headers, "f");
                __classPrivateFieldSet(this, _Action_headers, this.originHeaders, "f");
                return __classPrivateFieldGet(this, _Action_headers, "f");
            }
            set headers(value) {
                __classPrivateFieldSet(this, _Action_headers, value, "f");
            }
            get originCookies() {
                var _a;
                return cookie.parse((_a = this.req.headers.cookie) !== null && _a !== void 0 ? _a : '');
            }
            get cookies() {
                if (__classPrivateFieldGet(this, _Action_cookie, "f"))
                    return __classPrivateFieldGet(this, _Action_cookie, "f");
                __classPrivateFieldSet(this, _Action_cookie, this.originCookies, "f");
                return __classPrivateFieldGet(this, _Action_cookie, "f");
            }
            set cookies(value) {
                __classPrivateFieldSet(this, _Action_cookie, value, "f");
            }
            get bodyType() {
                const headerType = this.req.headers['content-type'];
                if (!headerType)
                    return;
                for (const bodyType of allBodyTypes) {
                    if (headerType.startsWith(bodyType)) {
                        return bodyType;
                    }
                }
            }
            parseBody() {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!this.bodyType) {
                        return;
                    }
                    if (this.bodyType === 'multipart/form-data') {
                        this.body = yield parseFormBody(this.req);
                    }
                    if (this.bodyType === 'application/x-www-form-urlencoded') {
                        this.body = parseSearch(yield parseBody(this.req));
                    }
                    if (this.bodyType === 'application/json') {
                        this.body = JSON.parse(yield parseBody(this.req));
                    }
                });
            }
        },
        _Action_search = new WeakMap(),
        _Action_headers = new WeakMap(),
        _Action_cookie = new WeakMap(),
        (() => {
            _get_parsedUrl_decorators = [once];
            _get_originSearch_decorators = [once];
            _get_originCookies_decorators = [once];
            _get_bodyType_decorators = [once];
            _parseBody_decorators = [once];
            __esDecorate(_a, null, _get_parsedUrl_decorators, { kind: "getter", name: "parsedUrl", static: false, private: false, access: { has: obj => "parsedUrl" in obj, get: obj => obj.parsedUrl } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_originSearch_decorators, { kind: "getter", name: "originSearch", static: false, private: false, access: { has: obj => "originSearch" in obj, get: obj => obj.originSearch } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_originCookies_decorators, { kind: "getter", name: "originCookies", static: false, private: false, access: { has: obj => "originCookies" in obj, get: obj => obj.originCookies } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _get_bodyType_decorators, { kind: "getter", name: "bodyType", static: false, private: false, access: { has: obj => "bodyType" in obj, get: obj => obj.bodyType } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _parseBody_decorators, { kind: "method", name: "parseBody", static: false, private: false, access: { has: obj => "parseBody" in obj, get: obj => obj.parseBody } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();

export { Action, URL_PARSER };