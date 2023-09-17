'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useApi = require('../../../hooks/useApi/useApi.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var values = require('../../../utils/rules/values/values.js');
var minLength = require('../../../utils/rules/minLength/minLength.js');
var maxLength = require('../../../utils/rules/maxLength/maxLength.js');
var pattern = require('../../../utils/rules/pattern/pattern.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');

const string = () => {
    const _a = jsx.useProps() || {}, { min, max, pattern: pattern$1, patternId } = _a, props = tslib.__rest(_a, ["min", "max", "pattern", "patternId"]);
    const { refRules } = useApi.useApi();
    const schema = useSchemaType.useSchemaType('string', props);
    if (schema) {
        const rules = [];
        if (props.default !== undefined) {
            rules.push(defaultTo.defaultTo(props.default));
        }
        rules.push(String);
        if (props.values) {
            rules.push(values.values(props.values));
        }
        if (min !== undefined) {
            schema.minimum = min;
            rules.push(minLength.minLength(min));
        }
        if (max !== undefined) {
            schema.maximum = max;
            rules.push(maxLength.maxLength(max));
        }
        if (pattern$1 !== undefined) {
            schema.pattern = String(pattern$1);
            rules.push(pattern.pattern(pattern$1, patternId));
        }
        const rule = pipe.pipe(...rules);
        if (props.ref) {
            refRules[props.ref] = rule;
        }
        if (props.default) {
            useRule.useRule(rule);
        }
        else {
            const parentRule = useParentRule.useParentRule();
            useRule.useRule(parentRule(rule));
        }
    }
    else if (props.ref) {
        if (props.default) {
            useRule.useRule(refRules[props.ref]);
        }
        else {
            const parentRule = useParentRule.useParentRule();
            useRule.useRule(parentRule(refRules[props.ref]));
        }
    }
};

exports.string = string;
