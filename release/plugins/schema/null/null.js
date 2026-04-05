'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');

const nullPlugin = () => {
    useBlock.useBlock('path', 'query', 'cookie', 'header');
    const props = jsx.useProps();
    useSchemaType.useSchemaType('null', props);
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (!hasRules)
        return;
    useRule.useRule(nullable.nullable);
};

exports.nullPlugin = nullPlugin;
