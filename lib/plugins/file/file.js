'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var mime = require('mime');
var Action = require('../../action/Action/Action.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var mime__default = /*#__PURE__*/_interopDefaultLegacy(mime);

function file(_a, handler) {
    var props = _a.props, _b = _a.children, children = _b === void 0 ? null : _b;
    var res = handler[Action.ACTION].res;
    var path = props.path;
    if (fs__default["default"].existsSync(path)) {
        var stat = fs__default["default"].statSync(path);
        if (stat.isFile()) {
            res.writeHead(200, {
                'Content-Type': mime__default["default"].getType(path),
                'Content-Length': stat.size,
            });
            var readStream_1 = fs__default["default"].createReadStream(path);
            readStream_1.pipe(res);
            return new Promise(function (resolve, reject) {
                readStream_1.once('end', function () { return resolve(children); });
                readStream_1.once('error', reject);
            });
        }
    }
}

exports.file = file;
