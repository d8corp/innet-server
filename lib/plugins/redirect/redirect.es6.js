import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

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
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <redirect> inside <action>');
    }
    const { to, status = 301, encode } = props;
    action.res.writeHead(getStatus(status), {
        location: encode ? customEncode(to) : to,
    });
    return null;
}

export { redirect, redirectStatuses };
