import { __awaiter } from 'tslib';
import innet, { useNewHandler, useApp } from 'innet';
import fs from 'node:fs';
import http from 'node:http';
import http2 from 'node:https';
import { onDestroy } from 'watch-state';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { serverContext } from '../../../hooks/useServer/useServer.es6.js';
import { serverPlugins } from '../../../hooks/useServerPlugins/useServerPlugins.es6.js';
import { Action } from '../../../utils/action/Action.es6.js';
import { actionContext } from '../../../hooks/useAction/useAction.es6.js';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isInvalidPath = require('is-invalid-path');
const server = () => {
    var _a, _b, _c;
    const handler = useNewHandler();
    const { props = {}, children } = useApp();
    const { env } = process;
    let { ssl: { key = (_a = env.SSL_KEY) !== null && _a !== void 0 ? _a : 'localhost.key', cert = (_b = env.SSL_CRT) !== null && _b !== void 0 ? _b : 'localhost.crt', } = {}, } = props;
    try {
        if (!isInvalidPath(key)) {
            key = fs.readFileSync(key).toString();
        }
        if (!isInvalidPath(cert)) {
            cert = fs.readFileSync(cert).toString();
        }
    }
    catch (_d) {
        key = '';
        cert = '';
    }
    const https = Boolean(key && cert);
    const { port = Number((_c = env.PORT) !== null && _c !== void 0 ? _c : (https ? 442 : 80)), onStart, onError, onRequest, onClose, } = props;
    const plugins = new Set();
    const server = https ? http2.createServer({ key, cert }) : http.createServer();
    serverContext.set(handler, { server, port });
    serverPlugins.set(handler, plugins);
    onDestroy(() => {
        server.close();
    });
    if (onError) {
        server.on('error', onError);
    }
    if (onClose) {
        server.addListener('close', onClose);
    }
    server.on('request', (req, res) => {
        onRequest === null || onRequest === void 0 ? void 0 : onRequest(req, res);
        const action = new Action(req, res);
        const requestHandler = Object.create(handler);
        actionContext.set(requestHandler, action);
        function server() {
            return __awaiter(this, void 0, void 0, function* () {
                for (const plugin of plugins) {
                    const result = yield plugin();
                    if (result !== undefined) {
                        return result;
                    }
                }
            });
        }
        innet({ type: server, props }, requestHandler);
    });
    innet(children, handler);
    server.listen(port, () => {
        onStart === null || onStart === void 0 ? void 0 : onStart({ port, https });
    });
};

export { server };
