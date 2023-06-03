import httpProxy from 'http-proxy';
import { CONTINUE } from '../../constants.es6.js';
import { actionContext } from '../../hooks/useAction/useAction.es6.js';
import '../../hooks/useServer/useServer.es6.js';

const proxyServer = httpProxy.createProxyServer({});
function proxy({ props: { to, secure = false } }, handler) {
    const action = actionContext.get(handler);
    if (!action) {
        throw Error('Use <proxy> inside <action>');
    }
    const { req, res } = action;
    delete req.headers.host;
    proxyServer.web(req, res, { target: to, secure });
    return CONTINUE;
}

export { proxy, proxyServer };
