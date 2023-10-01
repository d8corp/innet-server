'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
var fs = require('node:fs');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var generateTypes = require('../../../utils/generateTypes/generateTypes.js');

const dts = () => {
    const { namespace = process.env.INNET_DTS_NAMESPACE, path = process.env.INNET_DTS_PATH || 'src/apiTypes.d.ts', } = jsx.useProps() || {};
    const { docs } = useApi.useApi();
    fs.promises.writeFile(path, generateTypes.generateTypes(docs, namespace)).catch(e => {
        console.error(e);
    });
};

exports.dts = dts;
