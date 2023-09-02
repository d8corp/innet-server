'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useOneElementError = require('../../../hooks/useOneElementError/useOneElementError.js');

const license = () => {
    const { docs } = useApi.useApi();
    const props = jsx.useProps();
    if (docs.info.license) {
        useOneElementError.useOneElementError();
    }
    docs.info.license = props;
};

exports.license = license;
