'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var utils = require('@cantinc/utils');
var cookie = require('cookie');
var multiparty = require('multiparty');
var parseSearch = require('../../utils/parseSearch/parseSearch.js');
require('qs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cookie__default = /*#__PURE__*/_interopDefaultLegacy(cookie);
var multiparty__default = /*#__PURE__*/_interopDefaultLegacy(multiparty);

var ACTION = Symbol('Action');
var URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/;
var KEY_FIELD = /^(?<field>[^[]+)(?<rest>.*)$/;
var KEY_KEYS = /^\[(?<key>[^\]]+)\](?<rest>.*)$/;
function getKeys(keys) {
    var match = keys.match(KEY_KEYS);
    if (!match)
        return [keys];
    if (!match.groups.rest)
        return [match.groups.key];
    return tslib.__spreadArray([match.groups.key], tslib.__read(getKeys(match.groups.rest)), false);
}
function parseKey(key) {
    var fieldMatch = key.match(KEY_FIELD);
    if (!(fieldMatch === null || fieldMatch === void 0 ? void 0 : fieldMatch.groups.field)) {
        return {
            field: key,
            keys: [],
        };
    }
    return {
        field: fieldMatch.groups.field,
        keys: (fieldMatch === null || fieldMatch === void 0 ? void 0 : fieldMatch.groups.rest) ? getKeys(fieldMatch.groups.rest) : [],
    };
}
function addField(key, value, fields) {
    if (!key.keys.length) {
        if (!(key.field in fields)) {
            fields[key.field] = value;
            return;
        }
        var oldValue_1 = fields[key.field];
        if (Array.isArray(oldValue_1)) {
            if (Array.isArray(value)) {
                oldValue_1.push.apply(oldValue_1, tslib.__spreadArray([], tslib.__read(value), false));
                return;
            }
            oldValue_1.push(value);
            return;
        }
        if (Array.isArray(value)) {
            fields[key.field] = tslib.__spreadArray([oldValue_1], tslib.__read(value), false);
            return;
        }
        fields[key.field] = [oldValue_1, value];
        return;
    }
    var _a = tslib.__read(key.keys), field = _a[0], keys = _a.slice(1);
    var oldValue = fields[key.field];
    if (Array.isArray(oldValue)) {
        throw Error('invalid keys');
    }
    if (!oldValue) {
        fields[key.field] = {};
    }
    else if (typeof oldValue !== 'object') {
        throw Error('invalid keys');
    }
    addField({ field: field, keys: keys }, value, fields[key.field]);
}
function formatFields(fields) {
    var result = {};
    for (var key in fields) {
        var value = fields[key];
        addField(parseKey(key), Array.isArray(value) && value.length === 1 ? value[0] : value, result);
    }
    return result;
}
var Action = /** @class */ (function () {
    function Action(req, res, params) {
        if (params === void 0) { params = {}; }
        this.req = req;
        this.res = res;
        this.params = params;
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
            new multiparty__default["default"].Form(_this.params.multipartyForm).parse(_this.req, function (err, fields, files) {
                if (err) {
                    reject(err);
                    return;
                }
                _this.body = formatFields(fields);
                _this.files = formatFields(files);
                resolve(fields);
            });
        });
    };
    Object.defineProperty(Action.prototype, "search", {
        get: function () {
            return parseSearch.parseSearch(this.parsedUrl.search);
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
exports.KEY_FIELD = KEY_FIELD;
exports.KEY_KEYS = KEY_KEYS;
exports.URL_PARSER = URL_PARSER;
