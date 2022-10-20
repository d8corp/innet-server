'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Action = require('../../action/Action/Action.js');

var redirectStatuses = {
    multipleChoices: 300,
    movedPermanently: 301,
    found: 302,
    seeOther: 303,
    notModified: 304,
    useProxy: 305,
    temporaryRedirect: 307,
    permanentRedirect: 308,
};
function getStatus(status) {
    if (typeof status === 'number')
        return status;
    return redirectStatuses[status] || 301;
}
function customEncode(url) {
    return encodeURI(url.replaceAll('%20', ' '));
}
function redirect(_a, handler) {
    var props = _a.props; _a.children;
    var res = handler[Action.ACTION].res;
    var to = props.to, _b = props.status, status = _b === void 0 ? 301 : _b, encode = props.encode;
    res.writeHead(getStatus(status), {
        location: encode ? customEncode(to) : to,
    });
    return null;
}

exports.redirect = redirect;
exports.redirectStatuses = redirectStatuses;
