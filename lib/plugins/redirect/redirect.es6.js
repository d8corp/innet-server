import { ACTION } from '../../action/Action/Action.es6.js';

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
    return redirectStatuses[status] || 301;
}
function customEncode(url) {
    return encodeURI(url.replaceAll('%20', ' '));
}
function redirect({ props, children }, handler) {
    const { res } = handler[ACTION];
    const { to, status = 301, encode } = props;
    res.writeHead(getStatus(status), {
        location: encode ? customEncode(to) : to,
    });
    return null;
}

export { redirect, redirectStatuses };
