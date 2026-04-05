'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useBlock = require('../../../hooks/useBlock/useBlock.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');

const boolean = () => {
    useBlock.useBlock('path');
    const props = jsx.useProps();
    useSchemaType.useSchemaType('boolean', props);
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (!hasRules)
        return;
    const rules = [];
    if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
        rules.push(defaultTo.defaultTo(props.default));
    }
    rules.push(val => val === 'true' || (val === 'false' ? false : Boolean(val)));
    const rule = props.nullable ? oneOf.oneOf([nullable.nullable, pipe.pipe(...rules)]) : pipe.pipe(...rules);
    if (props.default === undefined) {
        const parentRule = useParentRule.useParentRule();
        useRule.useRule(parentRule(rule));
    }
    else {
        useRule.useRule(rule);
    }
};

exports.boolean = boolean;
