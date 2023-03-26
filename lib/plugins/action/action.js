'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var innet = require('innet');
var constants = require('../../constants.js');
var useAction = require('../../hooks/useAction/useAction.js');
var useServer = require('../../hooks/useServer/useServer.js');
require('qs');
var Action = require('../../utils/action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);

function action(_a, handler) {
    var _this = this;
    var _b = _a.props, props = _b === void 0 ? {} : _b, children = _a.children;
    var server = useServer.serverContext.get(handler);
    if (!server) {
        throw Error('Use <action> inside <server>');
    }
    var onError = props.onError, _c = props.unknownError, unknownError = _c === void 0 ? '' : _c;
    server.on('request', function (req, res) { return tslib.__awaiter(_this, void 0, void 0, function () {
        var childHandler, result, e_1;
        return tslib.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    childHandler = Object.create(handler);
                    childHandler[useAction.actionContext.key] = new Action.Action(req, res, props);
                    if (!children) return [3 /*break*/, 4];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, innet__default["default"](children, childHandler)];
                case 2:
                    result = _a.sent();
                    if (result === constants.CONTINUE) {
                        return [2 /*return*/];
                    }
                    if (typeof result === 'string') {
                        res.write(result);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    res.statusCode = 520;
                    onError === null || onError === void 0 ? void 0 : onError(e_1, useAction.actionContext.get(childHandler));
                    res.write(unknownError);
                    return [3 /*break*/, 4];
                case 4:
                    res.end();
                    return [2 /*return*/];
            }
        });
    }); });
}

exports.action = action;
