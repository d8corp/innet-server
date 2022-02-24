'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var fs = require('fs');
var http = require('http');
var http2 = require('https');
var innet = require('innet');
var Action = require('../action/Action/Action.js');
var constants = require('../constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var http__default = /*#__PURE__*/_interopDefaultLegacy(http);
var http2__default = /*#__PURE__*/_interopDefaultLegacy(http2);
var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

var isInvalidPath = require('is-invalid-path');
function server(_a, handler) {
    var _this = this;
    var _b = _a.props, props = _b === void 0 ? {} : _b, children = _a.children;
    var env = process.env;
    var _c = props.ssl, _d = _c === void 0 ? {} : _c, _e = _d.key, key = _e === void 0 ? env.SSL_KEY : _e, _f = _d.cert, cert = _f === void 0 ? env.SSL_CRT : _f;
    if (!isInvalidPath(key)) {
        key = fs__default["default"].readFileSync(key).toString();
    }
    if (!isInvalidPath(cert)) {
        cert = fs__default["default"].readFileSync(cert).toString();
    }
    var https = (key && cert);
    var _g = props.port, port = _g === void 0 ? env.PORT || (https ? 442 : 80) : _g, _h = props.unknownError, unknownError = _h === void 0 ? '' : _h, onStart = props.onStart, onError = props.onError, onRequest = props.onRequest;
    var server = https ? http2__default["default"].createServer({ key: key, cert: cert }) : http__default["default"].createServer();
    server.on('request', function (req, res) { return tslib.__awaiter(_this, void 0, void 0, function () {
        var childHandler, result, e_1;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    childHandler = Object.create(handler);
                    childHandler[Action.ACTION] = new Action.Action(req, res);
                    if (!onRequest) return [3 /*break*/, 2];
                    return [4 /*yield*/, onRequest(childHandler[Action.ACTION])];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    if (!children) return [3 /*break*/, 6];
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, innet__default["default"](children, childHandler)];
                case 4:
                    result = _a.sent();
                    if (result === constants.CONTINUE) {
                        return [2 /*return*/];
                    }
                    if (typeof result === 'string') {
                        res.write(result);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    res.statusCode = 520;
                    onError === null || onError === void 0 ? void 0 : onError(e_1);
                    res.write(unknownError);
                    return [3 /*break*/, 6];
                case 6:
                    res.end();
                    return [2 /*return*/];
            }
        });
    }); });
    var res, rej;
    var promise = new Promise(function (resolve, reject) {
        res = resolve;
        rej = reject;
    });
    server.on('error', function (e) {
        rej(e);
        onError === null || onError === void 0 ? void 0 : onError(e);
    });
    server.listen(port, function () {
        var url = "http".concat(https ? 's' : '', "://localhost:").concat(port);
        onStart === null || onStart === void 0 ? void 0 : onStart(url);
        res(url);
    });
    return promise;
}

exports.server = server;
