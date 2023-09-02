'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var jsx = require('@innet/jsx');
var uuid$1 = require('uuid');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var uuidTo = require('../../../utils/rules/uuidTo/uuidTo.js');
var values = require('../../../utils/rules/values/values.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var optional = require('../../../utils/rules/optional/optional.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');

const uuid = () => {
    const _a = jsx.useProps() || {}, { default: defaultValue } = _a, props = tslib.__rest(_a, ["default"]);
    const schema = useSchemaType.useSchemaType('string', Object.assign(Object.assign({}, props), { default: defaultValue === 'new' ? undefined : defaultValue }));
    // @ts-expect-error: FIXME
    schema.format = 'uuid';
    if (defaultValue === 'new') {
        // @ts-expect-error: FIXME
        schema['x-default'] = defaultValue;
    }
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo.defaultTo(defaultValue === 'new' ? uuid$1.v4 : defaultValue));
    }
    rules.push(uuidTo.uuidTo);
    if (props.values) {
        rules.push(values.values(props.values));
    }
    if (defaultValue === undefined) {
        useRule.useRule(optional.optional(pipe.pipe(...rules)));
    }
    else {
        useRule.useRule(pipe.pipe(...rules));
    }
};

exports.uuid = uuid;
