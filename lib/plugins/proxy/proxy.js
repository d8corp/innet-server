'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var httpProxy = require('http-proxy');
var constants = require('../../constants.js');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var httpProxy__default = /*#__PURE__*/_interopDefaultLegacy(httpProxy);

var proxyServer = httpProxy__default["default"].createProxyServer({});
function proxy(_a, handler) {
    var _b = _a.props, to = _b.to, _c = _b.secure, secure = _c === void 0 ? false : _c;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <proxy> inside <action>');
    }
    var req = action.req, res = action.res;
    delete req.headers.host;
    proxyServer.web(req, res, { target: to, secure: secure });
    return constants.CONTINUE;
}

exports.proxy = proxy;
