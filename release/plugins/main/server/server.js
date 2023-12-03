'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
var fs = require('node:fs');
var http = require('node:http');
var http2 = require('node:https');
var watchState = require('watch-state');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useServer = require('../../../hooks/useServer/useServer.js');
var useServerPlugins = require('../../../hooks/useServerPlugins/useServerPlugins.js');
var useServerPort = require('../../../hooks/useServerPort/useServerPort.js');
var useIsServerHttps = require('../../../hooks/useIsServerHttps/useIsServerHttps.js');
var Action = require('../../../utils/action/Action.js');
var useAction = require('../../../hooks/useAction/useAction.js');
var useRequestHandler = require('../../../hooks/useRequestHandler/useRequestHandler.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var http2__default = /*#__PURE__*/_interopDefaultLegacy(http2);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const isInvalidPath = require('is-invalid-path');
const server = () => {
    var _a, _b, _c;
    const handler = innet.useNewHandler();
    const { children, props = {}, } = innet.useApp();
    const { env } = process;
    let { ssl: { cert = (_a = env.INNET_SSL_CRT) !== null && _a !== void 0 ? _a : 'localhost.crt', key = (_b = env.INNET_SSL_KEY) !== null && _b !== void 0 ? _b : 'localhost.key', } = {}, } = props;
    try {
        if (!isInvalidPath(key)) {
            key = fs__default["default"].readFileSync(key).toString();
        }
        if (!isInvalidPath(cert)) {
            cert = fs__default["default"].readFileSync(cert).toString();
        }
    }
    catch (_d) {
        key = '';
        cert = '';
    }
    const https = Boolean(key && cert);
    const { onClose, onError, onRequest, onStart, port = Number((_c = env.INNET_PORT) !== null && _c !== void 0 ? _c : (https ? 442 : 80)), } = props;
    const plugins = new Set();
    const server = https ? http2__default["default"].createServer({ cert, key }) : http__default["default"].createServer();
    useServer.serverContext.set(handler, { port, server });
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
        useRequestHandler.requestHandlerContext.set(requestHandler, requestHandler);
        function server() {
            return tslib.__awaiter(this, void 0, void 0, function* () {
                for (const plugin of plugins) {
                    const result = yield plugin();
                    if (result !== undefined) {
                        return result;
                    }
                }
            });
        }
        innet__default["default"]({ props, type: server }, requestHandler);
    });
    innet__default["default"](children, handler);
    server.listen(port, () => {
        onStart === null || onStart === void 0 ? void 0 : onStart({ https, port });
    });
};

exports.server = server;
