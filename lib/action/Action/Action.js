'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var cookie = require('cookie');
var multiparty = require('multiparty');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cookie__default = /*#__PURE__*/_interopDefaultLegacy(cookie);
var multiparty__default = /*#__PURE__*/_interopDefaultLegacy(multiparty);

var ACTION = Symbol('Action');
var URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/;
var Action = /** @class */ (function () {
    function Action(req, res) {
        this.req = req;
        this.res = res;
    }
    Object.defineProperty(Action.prototype, "cookies", {
        get: function () {
            return cookie__default["default"].parse(this.req.headers.cookie || '');
        },
        enumerable: false,
        configurable: true
    });
    Action.prototype.setCookie = function (key, value, opt) {
        var cookies = this.res.getHeader('Set-Cookie');
        if (typeof cookies === 'string') {
            cookies = [cookies];
        }
        var normValue = typeof value === 'string' ? cookie__default["default"].serialize(key, value, opt) : "".concat(key, "=; max-age=0");
        if (cookies) {
            cookies.push(normValue);
        }
        else {
            cookies = normValue;
        }
        this.res.setHeader('Set-Cookie', cookies);
    };
    Action.prototype.parseBody = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            new multiparty__default["default"].Form().parse(_this.req, function (err, fields, files) {
                if (err) {
                    reject(err);
                }
                else {
                    for (var key in fields) {
                        if (fields[key].length === 1) {
                            fields[key] = fields[key][0];
                        }
                    }
                    for (var key in files) {
                        if (files[key].length === 1) {
                            files[key] = files[key][0];
                        }
                    }
                    _this.body = fields;
                    _this.files = files;
                    resolve(fields);
                }
            });
        });
    };
    Object.defineProperty(Action.prototype, "search", {
        get: function () {
            var e_1, _a;
            var result = Object.create(null);
            var search = this.parsedUrl.search || '';
            try {
                for (var _b = tslib.__values(search.split('&')), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var option = _c.value;
                    var _d = tslib.__read(option.split('=')), key = _d[0], value = _d.slice(1);
                    if (key) {
                        var normValue = value.join('=');
                        if (key in result) {
                            if (Array.isArray(result[key])) {
                                result[key].push(normValue);
                            }
                            else {
                                result[key] = [result[key], normValue];
                            }
                        }
                        else {
                            result[key] = normValue;
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "parsedUrl", {
        get: function () {
            var match = this.req.url.match(URL_PARSER);
            return match.groups;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "path", {
        get: function () {
            return this.parsedUrl.path;
        },
        enumerable: false,
        configurable: true
    });
    tslib.__decorate([
        utils.once
    ], Action.prototype, "cookies", null);
    tslib.__decorate([
        utils.once
    ], Action.prototype, "parseBody", null);
    tslib.__decorate([
        utils.once
    ], Action.prototype, "search", null);
    tslib.__decorate([
        utils.once
    ], Action.prototype, "parsedUrl", null);
    return Action;
}());

exports.ACTION = ACTION;
exports.Action = Action;
exports.URL_PARSER = URL_PARSER;
