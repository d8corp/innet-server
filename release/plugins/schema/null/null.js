'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');

const nullPlugin = () => {
    useBlock.useBlock('path', 'query', 'cookie', 'header');
    useSchemaType.useSchemaType('null', jsx.useProps());
    useRule.useRule(nullable.nullable);
};

exports.nullPlugin = nullPlugin;
