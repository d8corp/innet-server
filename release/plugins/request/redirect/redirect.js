'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var useHeaders = require('../../../hooks/useHeaders/useHeaders.js');

const redirectStatuses = {
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
    // @ts-expect-error: FIXME
    return redirectStatuses[status] || 301;
}
function customEncode(url) {
    return encodeURI(url.replaceAll('%20', ' '));
}
const redirect = () => {
    var _a;
    const res = useResponse.useResponse();
    if (!res) {
        throw Error('Use <redirect> inside <request>');
    }
    const headers = useHeaders.useHeaders();
    const props = jsx.useProps();
    const { to, status = 301, encode } = props;
    res.writeHead(getStatus(status), {
        location: encode ? customEncode(to) : to,
        'Cache-Control': (_a = headers['Cache-Control']) !== null && _a !== void 0 ? _a : 'no-cache, no-store, must-revalidate',
    });
    res.end();
};

exports.redirect = redirect;
exports.redirectStatuses = redirectStatuses;
