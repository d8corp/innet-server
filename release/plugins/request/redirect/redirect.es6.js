import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { useHeaders } from '../../../hooks/useHeaders/useHeaders.es6.js';

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
    const res = useResponse();
    if (!res) {
        throw Error('Use <redirect> inside <request>');
    }
    const headers = useHeaders();
    const props = useProps();
    const { to, status = 301, encode } = props;
    res.writeHead(getStatus(status), {
        location: encode ? customEncode(to) : to,
        'Cache-Control': (_a = headers['Cache-Control']) !== null && _a !== void 0 ? _a : 'no-cache, no-store, must-revalidate',
    });
    res.end();
};

export { redirect, redirectStatuses };
