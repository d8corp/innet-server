import { useProps } from '@innet/jsx';
import httpProxy from 'http-proxy';
import '../../../hooks/index.mjs';
import { useRequest } from '../../../hooks/useRequest/useRequest.mjs';
import { useResponse } from '../../../hooks/useResponse/useResponse.mjs';
import { useThrow } from '../../../hooks/useThrow/useThrow.mjs';

const proxy = () => {
    const { onProxyRes, secure = false, to, } = useProps();
    const req = useRequest();
    const res = useResponse();
    if (!req || !res) {
        useThrow('{type} MUST be in <request>');
    }
    const proxyServer = httpProxy.createProxyServer({});
    delete req.headers.host;
    if (onProxyRes) {
        proxyServer.on('proxyRes', onProxyRes);
    }
    proxyServer.web(req, res, { secure, target: to });
};

export { proxy };
