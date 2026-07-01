import { useNewHandler, useApp, net, innet } from 'innet';
import { useProps } from '@innet/jsx';
import fs from 'node:fs';
import http from 'node:http';
import http2 from 'node:https';
import { onDestroy } from 'watch-state';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { useApi } from '../../../hooks/useApi/useApi.mjs';
import { serverContext } from '../../../hooks/useServer/useServer.mjs';
import { serverPlugins } from '../../../hooks/useServerPlugins/useServerPlugins.mjs';
import { serverPortContext } from '../../../hooks/useServerPort/useServerPort.mjs';
import { serverHttpsContext } from '../../../hooks/useIsServerHttps/useIsServerHttps.mjs';
import { Action } from '../../../utils/action/Action.mjs';
import { actionContext } from '../../../hooks/useAction/useAction.mjs';

const server = () => {
    var _a, _b, _c;
    const handler = useNewHandler();
    const props = useProps();
    const { env } = process;
    let { ssl: { cert = (_a = env.INNET_SSL_CRT) !== null && _a !== void 0 ? _a : 'localhost.crt', key = (_b = env.INNET_SSL_KEY) !== null && _b !== void 0 ? _b : 'localhost.key', } = {}, } = props;
    try {
        if (!key.startsWith('-----BEGIN PRIVATE KEY-----')) {
            key = fs.readFileSync(key).toString();
        }
        if (!cert.startsWith('-----BEGIN CERTIFICATE-----')) {
            cert = fs.readFileSync(cert).toString();
        }
    }
    catch (_d) {
        key = '';
        cert = '';
    }
    const https = Boolean(key && cert);
    const { onClose, onError, onRequest, onStart, port = Number((_c = env.INNET_PORT) !== null && _c !== void 0 ? _c : (https ? 443 : 80)), } = props;
    const plugins = new Map();
    const apiPaths = [];
    const server = https ? http2.createServer({ cert, key }) : http.createServer();
    const context = {
        initAPI: (props) => {
            apiPaths.push(props.prefix || '');
        },
        initUI: (props) => {
            var _a;
            const { prefix } = useApi();
            apiPaths.push(`${prefix}${(_a = props.path) !== null && _a !== void 0 ? _a : (process.env.INNET_UI_PATH || '/ui')}`);
        },
        port,
        props,
        server,
    };
    serverContext.set(handler, context);
    serverPlugins.set(handler, plugins);
    serverPortContext.set(handler, port);
    serverHttpsContext.set(handler, https);
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
        async function server() {
            const app = useApp();
            for (const [plugin, handler] of plugins) {
                const actionHandler = Object.create(handler);
                actionContext.set(actionHandler, action);
                const result = await net(plugin, app, actionHandler);
                if (result !== undefined) {
                    return result;
                }
            }
        }
        innet({ props, type: server }, requestHandler);
    });
    innet(props.children, handler);
    server.listen(port, () => {
        onStart === null || onStart === void 0 ? void 0 : onStart({ apiPaths, https, port });
    });
};

export { server };
