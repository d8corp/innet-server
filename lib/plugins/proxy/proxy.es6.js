import httpProxy from 'http-proxy';
import { ACTION } from '../../action/Action/Action.es6.js';
import { CONTINUE } from '../../constants.es6.js';

const proxyServer = httpProxy.createProxyServer({});
function proxy({ props: { to, secure = false } }, handler) {
    const { req, res } = handler[ACTION];
    delete req.headers.host;
    proxyServer.web(req, res, { target: to, secure });
    return CONTINUE;
}

export { proxy };
