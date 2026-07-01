'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var jsx = require('@innet/jsx');
var fs = require('node:fs');
var http = require('node:http');
var http2 = require('node:https');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useServer = require('../../../hooks/useServer/useServer.js');
var useServerPlugins = require('../../../hooks/useServerPlugins/useServerPlugins.js');
var useServerPort = require('../../../hooks/useServerPort/useServerPort.js');
var useIsServerHttps = require('../../../hooks/useIsServerHttps/useIsServerHttps.js');
var Action = require('../../../utils/action/Action.js');
var useAction = require('../../../hooks/useAction/useAction.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var http2__default = /*#__PURE__*/_interopDefaultLegacy(http2);

const server = () => {
    var _a, _b, _c;
    const handler = innet.useNewHandler();
    const props = jsx.useProps();
    const { env } = process;
    let { ssl: { cert = (_a = env.INNET_SSL_CRT) !== null && _a !== void 0 ? _a : 'localhost.crt', key = (_b = env.INNET_SSL_KEY) !== null && _b !== void 0 ? _b : 'localhost.key', } = {}, } = props;
    try {
        if (!key.startsWith('-----BEGIN PRIVATE KEY-----')) {
            key = fs__default["default"].readFileSync(key).toString();
        }
        if (!cert.startsWith('-----BEGIN CERTIFICATE-----')) {
            cert = fs__default["default"].readFileSync(cert).toString();
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
    const server = https ? http2__default["default"].createServer({ cert, key }) : http__default["default"].createServer();
    const context = {
        initAPI: (props) => {
            apiPaths.push(props.prefix || '');
        },
        initUI: (props) => {
            var _a;
            const { prefix } = useApi.useApi();
            apiPaths.push(`${prefix}${(_a = props.path) !== null && _a !== void 0 ? _a : (process.env.INNET_UI_PATH || '/ui')}`);
        },
        port,
        props,
        server,
    };
    useServer.serverContext.set(handler, context);
    useServerPlugins.serverPlugins.set(handler, plugins);
    useServerPort.serverPortContext.set(handler, port);
    useIsServerHttps.serverHttpsContext.set(handler, https);
    watchState.onDestroy(() => {
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
        const action = new Action.Action(req, res);
        const requestHandler = Object.create(handler);
        useAction.actionContext.set(requestHandler, action);
        async function server() {
            const app = innet.useApp();
            for (const [plugin, handler] of plugins) {
                const actionHandler = Object.create(handler);
                useAction.actionContext.set(actionHandler, action);
                const result = await innet.net(plugin, app, actionHandler);
                if (result !== undefined) {
                    return result;
                }
            }
        }
        innet.innet({ props, type: server }, requestHandler);
    });
    innet.innet(props.children, handler);
    server.listen(port, () => {
        onStart === null || onStart === void 0 ? void 0 : onStart({ apiPaths, https, port });
    });
};

exports.server = server;
