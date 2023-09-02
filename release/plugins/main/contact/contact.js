'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useOneElementError = require('../../../hooks/useOneElementError/useOneElementError.js');

const contact = () => {
    const { docs } = useApi.useApi();
    const props = jsx.useProps();
    const { contact } = docs.info;
    if (contact) {
        useOneElementError.useOneElementError();
    }
    docs.info.contact = props;
};

exports.contact = contact;
