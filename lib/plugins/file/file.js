'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var innet = require('innet');
var fs = require('fs');
var mime = require('mime');
var useAction = require('../../hooks/useAction/useAction.js');
require('../../hooks/useServer/useServer.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var innet__default = /*#__PURE__*/_interopDefaultLegacy(innet);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var mime__default = /*#__PURE__*/_interopDefaultLegacy(mime);

function file(_a, handler) {
    var props = _a.props, _b = _a.children, children = _b === void 0 ? null : _b;
    var action = useAction.actionContext.get(handler);
    if (!action) {
        throw Error('Use <file> inside <action>');
    }
    var path = props.path;
    if (fs__default["default"].existsSync(path)) {
        var stat_1 = fs__default["default"].statSync(path);
        if (stat_1.isFile()) {
            var readStream_1 = fs__default["default"].createReadStream(path);
            var result_1 = innet__default["default"](children, handler);
            var run = function () {
                action.res.writeHead(200, {
                    'Content-Type': mime__default["default"].getType(path),
                    'Content-Length': stat_1.size,
                });
                readStream_1.pipe(action.res);
            };
            if (result_1 instanceof Promise) {
                result_1.then(run);
            }
            else {
                run();
            }
            return new Promise(function (resolve, reject) {
                readStream_1.once('end', function () { return resolve(result_1); });
                readStream_1.once('error', reject);
            });
        }
    }
}

exports.file = file;
