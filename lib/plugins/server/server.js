'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var fs = require('fs');
var http = require('http');
var http2 = require('https');
var watchState = require('watch-state');
require('../../hooks/useAction/useAction.js');
var useServer = require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var http2__default = /*#__PURE__*/_interopDefaultLegacy(http2);

var isInvalidPath = require('is-invalid-path');
function server(_a, handler) {
    var _b = _a.props, props = _b === void 0 ? {} : _b, children = _a.children;
    var env = process.env;
    var _c = props.ssl, _d = _c === void 0 ? {} : _c, _e = _d.key, key = _e === void 0 ? env.SSL_KEY : _e, _f = _d.cert, cert = _f === void 0 ? env.SSL_CRT : _f;
    var childHandler = Object.create(handler);
    if (!isInvalidPath(key)) {
        key = fs__default["default"].readFileSync(key).toString();
    }
    if (!isInvalidPath(cert)) {
        cert = fs__default["default"].readFileSync(cert).toString();
    }
    var https = Boolean(key && cert);
    var _g = props.port, port = _g === void 0 ? env.PORT || (https ? 442 : 80) : _g, onStart = props.onStart, onError = props.onError, onRequest = props.onRequest;
    var server = https ? http2__default["default"].createServer({ key: key, cert: cert }) : http__default["default"].createServer();
    childHandler[useServer.serverContext.key] = server;
    watchState.onDestroy(function () {
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
    innet__default["default"](children, childHandler);
    server.listen(port, function () {
        var url = "http".concat(https ? 's' : '', "://localhost:").concat(port);
        onStart === null || onStart === void 0 ? void 0 : onStart(url);
    });
    return server;
}

exports.server = server;
