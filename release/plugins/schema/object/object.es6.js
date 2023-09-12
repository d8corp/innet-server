import innet, { useNewHandler } from 'innet';
import { useChildren, useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useApi } from '../../../hooks/useApi/useApi.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { objectSchemaContext } from '../../../hooks/useObjectSchemaContext/useObjectSchemaContext.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { parentRuleContext, useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { objectOf } from '../../../utils/rules/objectOf/objectOf.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule, ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { objectRuleContext } from '../../../hooks/useObjectRule/useObjectRule.es6.js';

const object = () => {
    useBlock('path');
    const children = useChildren();
    const props = useProps() || {};
    const { refRules } = useApi();
    const schema = useSchemaType('object', props);
    const handler = useNewHandler();
    if (schema) {
        schema.additionalProperties = {};
        objectSchemaContext.set(handler, schema);
        schemaContext.set(handler, schema.additionalProperties);
        parentRuleContext.reset(handler);
        const rules = [];
        const rulesMap = {};
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(defaultTo(props.default));
        }
        let childRule = v => v;
        const restRule = (value, data) => childRule(value, data);
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(objectOf(rulesMap, restRule));
        }
        else {
            const parentRule = useParentRule();
            rules.push(parentRule(objectOf(rulesMap, restRule)));
        }
        const rule = pipe(...rules);
        if (props.ref) {
            refRules[props.ref] = rule;
        }
        useRule(rule);
        objectRuleContext.set(handler, rulesMap);
        ruleContext.set(handler, rule => {
            childRule = rule;
        });
        parentRuleContext.reset(handler);
        innet(children, handler);
    }
    else if (props.ref) {
        useRule(refRules[props.ref]);
    }
};

export { object };
