'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var useHeaders = require('../../../hooks/useHeaders/useHeaders.js');

const redirectStatuses = {
    found: 302,
    movedPermanently: 301,
    multipleChoices: 300,
    notModified: 304,
    permanentRedirect: 308,
    seeOther: 303,
    temporaryRedirect: 307,
    useProxy: 305,
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
    const { encode, status = 301, to, } = props;
    res.writeHead(getStatus(status), {
        'Cache-Control': (_a = headers['Cache-Control']) !== null && _a !== void 0 ? _a : 'no-cache, no-store, must-revalidate',
        location: encode ? customEncode(to) : to,
    });
    res.end();
};

exports.redirect = redirect;
exports.redirectStatuses = redirectStatuses;
