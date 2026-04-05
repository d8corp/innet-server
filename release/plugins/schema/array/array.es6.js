import { useNewHandler, innet } from 'innet';
import { useContext, useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { useParentRule, parentRuleContext } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { arrayOf } from '../../../utils/rules/arrayOf/arrayOf.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { useEffect } from '../../../hooks/useEffect/useEffect.es6.js';

const array = () => {
    useBlock('path');
    const setRule = useContext(ruleContext);
    const handler = useNewHandler();
    const { children, maxItems, minItems, uniqueItems, ...props } = useProps();
    const schema = useSchemaType('array', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const fieldSchema = {};
    handler[schemaContext.key] = fieldSchema;
    schema.items = fieldSchema;
    if (maxItems) {
        schema.maxItems = maxItems;
    }
    if (minItems) {
        schema.minItems = minItems;
    }
    if (uniqueItems) {
        schema.uniqueItems = uniqueItems;
    }
    if (setRule && hasRules) {
        let oneOfRulesMap;
        const rules = [];
        const parentRule = useParentRule();
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(defaultTo(props.default));
        }
        const rootRule = (props === null || props === void 0 ? void 0 : props.default) === undefined
            ? (rule) => parentRule(pipe(...rules, arrayOf(rule)))
            : (rule) => pipe(...rules, arrayOf(rule));
        parentRuleContext.reset(handler);
        ruleContext.set(handler, rule => {
            if (oneOfRulesMap) {
                oneOfRulesMap.push(rule);
            }
            else {
                oneOfRulesMap = [rule];
                const mainRule = rootRule(oneOf(oneOfRulesMap));
                setRule(props.nullable ? oneOf([nullable, mainRule]) : mainRule);
            }
        });
        innet(children, handler);
        useEffect(() => {
            if (!oneOfRulesMap) {
                setRule(props.nullable ? oneOf([nullable, rootRule(e => e)]) : rootRule(e => e));
            }
        });
        return;
    }
    innet(children, handler);
};

export { array };
