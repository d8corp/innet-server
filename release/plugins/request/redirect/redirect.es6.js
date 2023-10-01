import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { useHeaders } from '../../../hooks/useHeaders/useHeaders.es6.js';

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
    const res = useResponse();
    if (!res) {
        throw Error('Use <redirect> inside <request>');
    }
    const headers = useHeaders();
    const props = useProps();
    const { encode, status = 301, to, } = props;
    res.writeHead(getStatus(status), {
        'Cache-Control': (_a = headers['Cache-Control']) !== null && _a !== void 0 ? _a : 'no-cache, no-store, must-revalidate',
        location: encode ? customEncode(to) : to,
    });
    res.end();
};

export { redirect, redirectStatuses };
