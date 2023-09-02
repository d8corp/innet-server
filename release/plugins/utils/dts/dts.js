'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
var dtsGenerator = require('dtsgenerator');
var fs = require('node:fs');
require('../../../hooks/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dtsGenerator__default = /*#__PURE__*/_interopDefaultLegacy(dtsGenerator);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);

const dts = () => {
    const _a = jsx.useProps(), { path } = _a, config = tslib.__rest(_a, ["path"]);
    const { docs } = useApi.useApi();
    dtsGenerator__default["default"]({
        contents: [dtsGenerator.parseSchema(JSON.parse(JSON.stringify(docs)))],
        config,
    }).then((content) => tslib.__awaiter(void 0, void 0, void 0, function* () {
        yield fs__default["default"].promises.writeFile(path, `interface Bin {
  filename: string
  fieldName: string
  originalFilename: string
  path: string
  type: string
  disposition: string
  size: number
  extension?: string
}
${content
            .replaceAll(';', '')
            .replaceAll('number // int64', 'bigint')
            .replaceAll('string // binary', 'Bin')
            .replaceAll('string // date-time', 'Date')}`);
    })).catch(error => {
        console.warn(error);
    });
};

exports.dts = dts;
