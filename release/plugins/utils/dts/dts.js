'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
var fs = require('node:fs');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var generateTypes = require('../../../utils/generateTypes/generateTypes.js');

const dts = () => {
    const { path = 'src/api.d.ts', namespace } = jsx.useProps() || {};
    const { docs } = useApi.useApi();
    fs.promises.writeFile(path, generateTypes.generateTypes(docs, namespace)).catch(e => {
        console.error(e);
    });
};

exports.dts = dts;
