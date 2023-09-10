'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
var httpProxy = require('http-proxy');
require('../../../hooks/index.js');
var useRequest = require('../../../hooks/useRequest/useRequest.js');
var useResponse = require('../../../hooks/useResponse/useResponse.js');
var useThrow = require('../../../hooks/useThrow/useThrow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var httpProxy__default = /*#__PURE__*/_interopDefaultLegacy(httpProxy);

const proxy = () => {
    const { to, secure, onProxyRes } = jsx.useProps();
    const req = useRequest.useRequest();
    const res = useResponse.useResponse();
    if (!req || !res) {
        useThrow.useThrow('{type} MUST be in <request>');
    }
    const proxyServer = httpProxy__default["default"].createProxyServer({});
    delete req.headers.host;
    if (onProxyRes) {
        proxyServer.on('proxyRes', onProxyRes);
    }
    proxyServer.web(req, res, { target: to, secure });
};

exports.proxy = proxy;
