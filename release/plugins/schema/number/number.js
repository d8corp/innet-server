'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var num = require('../../../utils/rules/num/num.js');
var values = require('../../../utils/rules/values/values.js');
var min = require('../../../utils/rules/min/min.js');
var max = require('../../../utils/rules/max/max.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const number = () => {
    const _a = jsx.useProps() || {}, { min: min$1, max: max$1 } = _a, props = tslib.__rest(_a, ["min", "max"]);
    const schema = useSchemaType.useSchemaType('number', props);
    // @ts-expect-error: FIXME
    schema.minimum = min$1;
    // @ts-expect-error: FIXME
    schema.maximum = max$1;
    const rules = [];
    if (props.default !== undefined) {
        rules.push(defaultTo.defaultTo(props.default));
    }
    rules.push(num.num);
    if (props.values) {
        rules.push(values.values(props.values));
    }
    if (min$1 !== undefined) {
        rules.push(min.min(min$1));
    }
    if (max$1 !== undefined) {
        rules.push(max.max(max$1));
    }
    if (props.default === undefined) {
        const rootRule = useParentRule.useParentRule();
        useRule.useRule(rootRule(pipe.pipe(...rules)));
    }
    else {
        useRule.useRule(pipe.pipe(...rules));
    }
};

exports.number = number;
