import { __decorate } from 'tslib';
import { once } from '@cantinc/utils';
import cookie from 'cookie';
import multiparty from 'multiparty';
import { parseSearch } from '../../utils/parseSearch/parseSearch.es6.js';
import 'qs';

const ACTION = Symbol('Action');
const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/;
const KEY_FIELD = /^(?<field>[^[]+)(?<rest>.*)$/;
const KEY_KEYS = /^\[(?<key>[^\]]+)\](?<rest>.*)$/;
function getKeys(keys) {
    const match = keys.match(KEY_KEYS);
    if (!match)
        return [keys];
    if (!match.groups.rest)
        return [match.groups.key];
    return [match.groups.key, ...getKeys(match.groups.rest)];
}
function parseKey(key) {
    const fieldMatch = key.match(KEY_FIELD);
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
        const oldValue = fields[key.field];
        if (Array.isArray(oldValue)) {
            if (Array.isArray(value)) {
                oldValue.push(...value);
                return;
            }
            oldValue.push(value);
            return;
        }
        if (Array.isArray(value)) {
            fields[key.field] = [oldValue, ...value];
            return;
        }
        fields[key.field] = [oldValue, value];
        return;
    }
    const [field, ...keys] = key.keys;
    const oldValue = fields[key.field];
    if (Array.isArray(oldValue)) {
        throw Error('invalid keys');
    }
    if (!oldValue) {
        fields[key.field] = {};
    }
    else if (typeof oldValue !== 'object') {
        throw Error('invalid keys');
    }
    addField({ field, keys }, value, fields[key.field]);
}
function formatFields(fields) {
    const result = {};
    for (const key in fields) {
        const value = fields[key];
        addField(parseKey(key), Array.isArray(value) && value.length === 1 ? value[0] : value, result);
    }
    return result;
}
class Action {
    constructor(req, res, params = {}) {
        this.req = req;
        this.res = res;
        this.params = params;
    }
    get cookies() {
        return cookie.parse(this.req.headers.cookie || '');
    }
    setCookie(key, value, opt) {
        let cookies = this.res.getHeader('Set-Cookie');
        if (typeof cookies === 'string') {
            cookies = [cookies];
        }
        const normValue = typeof value === 'string' ? cookie.serialize(key, value, opt) : `${key}=; max-age=0`;
        if (cookies) {
            cookies.push(normValue);
        }
        else {
            cookies = normValue;
        }
        this.res.setHeader('Set-Cookie', cookies);
    }
    parseBody() {
        return new Promise((resolve, reject) => {
            new multiparty.Form(this.params.multipartyForm).parse(this.req, (err, fields, files) => {
                if (err) {
                    reject(err);
                    return;
                }
                this.body = formatFields(fields);
                this.files = formatFields(files);
                resolve(fields);
            });
        });
    }
    get search() {
        return parseSearch(this.parsedUrl.search);
    }
    get parsedUrl() {
        const match = this.req.url.match(URL_PARSER);
        return match.groups;
    }
    get path() {
        return this.parsedUrl.path;
    }
}
__decorate([
    once
], Action.prototype, "cookies", null);
__decorate([
    once
], Action.prototype, "parseBody", null);
__decorate([
    once
], Action.prototype, "search", null);
__decorate([
    once
], Action.prototype, "parsedUrl", null);

export { ACTION, Action, KEY_FIELD, KEY_KEYS, URL_PARSER };
