'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
require('../../../hooks/index.js');
require('../../../hooks/useParentRule/index.js');
require('../../../utils/index.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var values = require('../../../utils/rules/values/values.js');
var minLength = require('../../../utils/rules/minLength/minLength.js');
var maxLength = require('../../../utils/rules/maxLength/maxLength.js');
var pattern = require('../../../utils/rules/pattern/pattern.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useParentRule = require('../../../hooks/useParentRule/useParentRule.js');

const string = () => {
    const _a = jsx.useProps() || {}, { min, max, pattern: pattern$1, patternId } = _a, props = tslib.__rest(_a, ["min", "max", "pattern", "patternId"]);
    const schema = useSchemaType.useSchemaType('string', props);
    const rules = [];
    if (props.default !== undefined) {
        rules.push(defaultTo.defaultTo(props.default));
    }
    rules.push(String);
    if (props.values) {
        rules.push(values.values(props.values));
    }
    if (min !== undefined) {
        // @ts-expect-error: FIXME
        schema.minimum = min;
        rules.push(minLength.minLength(min));
    }
    if (max !== undefined) {
        // @ts-expect-error: FIXME
        schema.maximum = max;
        rules.push(maxLength.maxLength(max));
    }
    if (pattern$1 !== undefined) {
        // @ts-expect-error: FIXME
        schema.pattern = String(pattern$1);
        rules.push(pattern.pattern(pattern$1, patternId));
    }
    if (props.default) {
        useRule.useRule(pipe.pipe(...rules));
    }
    else {
        const parentRule = useParentRule.useParentRule();
        useRule.useRule(parentRule(pipe.pipe(...rules)));
    }
};

exports.string = string;
