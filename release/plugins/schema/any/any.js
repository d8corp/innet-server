'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const any = () => {
    const props = jsx.useProps();
    useSchemaType.useSchemaType('any', props);
    const rules = [];
    if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
        rules.push(defaultTo.defaultTo(props.default));
    }
    if ((props === null || props === void 0 ? void 0 : props.default) === undefined) {
        const parentRule = useParentRule.useParentRule();
        useRule.useRule(parentRule(pipe.pipe(...rules)));
    }
    else {
        useRule.useRule(pipe.pipe(...rules));
    }
};

exports.any = any;
