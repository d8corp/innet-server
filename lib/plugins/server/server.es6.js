import innet from 'innet';
import fs from 'fs';
import http from 'http';
import http2 from 'https';
import { onDestroy } from 'watch-state';
import '../../hooks/useAction/useAction.es6.js';
import { serverContext } from '../../hooks/useServer/useServer.es6.js';

const isInvalidPath = require('is-invalid-path');
function server({ props = {}, children }, handler) {
    const { env } = process;
    let { ssl: { key = env.SSL_KEY, cert = env.SSL_CRT } = {} } = props;
    const childHandler = Object.create(handler);
    if (!isInvalidPath(key)) {
        key = fs.readFileSync(key).toString();
    }
    if (!isInvalidPath(cert)) {
        cert = fs.readFileSync(cert).toString();
    }
    const https = Boolean(key && cert);
    const { port = env.PORT || (https ? 442 : 80), onStart, onError, onRequest } = props;
    const server = https ? http2.createServer({ key, cert }) : http.createServer();
    childHandler[serverContext.key] = server;
    onDestroy(() => {
        var _a;
        (_a = props.onDestroy) === null || _a === void 0 ? void 0 : _a.call(props);
        server.close();
    });
    if (onError) {
        server.on('error', onError);
    }
    if (onRequest) {
        server.on('request', onRequest);
    }
    innet(children, childHandler);
    server.listen(port, () => {
        const url = `http${https ? 's' : ''}://localhost:${port}`;
        onStart === null || onStart === void 0 ? void 0 : onStart(url);
    });
    return server;
}

export { server };
