import { useProps } from '@innet/jsx';
import httpProxy from 'http-proxy';
import '../../../hooks/index.es6.js';
import { useRequest } from '../../../hooks/useRequest/useRequest.es6.js';
import { useResponse } from '../../../hooks/useResponse/useResponse.es6.js';
import { useThrow } from '../../../hooks/useThrow/useThrow.es6.js';

const proxy = () => {
    const { to, secure } = useProps();
    const req = useRequest();
    const res = useResponse();
    if (!req || !res) {
        useThrow('{type} MUST be in <request>');
    }
    const proxyServer = httpProxy.createProxyServer({});
    delete req.headers.host;
    proxyServer.web(req, res, { target: to, secure });
};

export { proxy };
