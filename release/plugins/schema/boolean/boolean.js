'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const boolean = () => {
    useBlock.useBlock('path');
    const props = jsx.useProps();
    useSchemaType.useSchemaType('boolean', props);
    const rules = [];
    if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
        rules.push(defaultTo.defaultTo(props.default));
    }
    rules.push(val => val === 'true' || (val === 'false' ? false : Boolean(val)));
    if ((props === null || props === void 0 ? void 0 : props.default) === undefined) {
        const parentRule = useParentRule.useParentRule();
        useRule.useRule(parentRule(pipe.pipe(...rules)));
    }
    else {
        useRule.useRule(pipe.pipe(...rules));
    }
};

exports.boolean = boolean;
