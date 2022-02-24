import { __decorate } from 'tslib';
import { once } from '@cantinc/utils';
import cookie from 'cookie';
import multiparty from 'multiparty';

const ACTION = Symbol('Action');
const URL_PARSER = /^(?<path>[^?]+)(\?(?<search>.*))?/;
class Action {
    constructor(req, res) {
        this.req = req;
        this.res = res;
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
            new multiparty.Form().parse(this.req, (err, fields, files) => {
                if (err) {
                    reject(err);
                }
                else {
                    for (const key in fields) {
                        if (fields[key].length === 1) {
                            fields[key] = fields[key][0];
                        }
                    }
                    for (const key in files) {
                        if (files[key].length === 1) {
                            files[key] = files[key][0];
                        }
                    }
                    this.body = fields;
                    this.files = files;
                    resolve(fields);
                }
            });
        });
    }
    get search() {
        const result = Object.create(null);
        const search = this.parsedUrl.search || '';
        for (const option of search.split('&')) {
            const [key, ...value] = option.split('=');
            if (key) {
                const normValue = value.join('=');
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
        return result;
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

export { ACTION, Action, URL_PARSER };
