'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsx = require('@innet/jsx');
var uuid$1 = require('uuid');
require('../../../hooks/index.js');
require('../../../utils/index.js');
var useBodyContext = require('../../../hooks/useBodyContext/useBodyContext.js');
var useSchemaType = require('../../../hooks/useSchemaType/useSchemaType.js');
var defaultTo = require('../../../utils/rules/defaultTo/defaultTo.js');
var uuidTo = require('../../../utils/rules/uuidTo/uuidTo.js');
var values = require('../../../utils/rules/values/values.js');
var oneOf = require('../../../utils/rules/oneOf/oneOf.js');
var nullable = require('../../../utils/rules/nullable/nullable.js');
var pipe = require('../../../utils/rules/pipe/pipe.js');
var useRule = require('../../../hooks/useRule/useRule.js');
var optional = require('../../../utils/rules/optional/optional.js');

const uuid = () => {
    const { default: defaultValue, ...props } = jsx.useProps();
    const isBody = Boolean(jsx.useContext(useBodyContext.bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const params = {
        ...props,
    };
    if (defaultValue !== 'new') {
        params.default = defaultValue;
    }
    const schema = useSchemaType.useSchemaType('string', params);
    // @ts-expect-error: FIXME
    schema.format = 'uuid';
    if (defaultValue === 'new') {
        // @ts-expect-error: FIXME
        schema['x-default'] = defaultValue;
    }
    if (!hasRules)
        return;
    const rules = [];
    if (defaultValue !== undefined) {
        rules.push(defaultTo.defaultTo(defaultValue === 'new' ? uuid$1.v4 : defaultValue));
    }
    rules.push(uuidTo.uuidTo);
    if (props.values) {
        rules.push(values.values(values.getArrayValues(props.values)));
    }
    const rule = props.nullable ? oneOf.oneOf([nullable.nullable, pipe.pipe(...rules)]) : pipe.pipe(...rules);
    if (defaultValue === undefined) {
        useRule.useRule(optional.optional(rule));
    }
    else {
        useRule.useRule(rule);
    }
};

exports.uuid = uuid;
