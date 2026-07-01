import { useNewHandler, innet } from 'innet';
import { useContext, useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useBlock } from '../../../hooks/useBlock/useBlock.mjs';
import { ruleContext } from '../../../hooks/useRule/useRule.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.mjs';
import { useParentRule, parentRuleContext } from '../../../hooks/useParentRule/useParentRule.mjs';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.mjs';
import { unique } from '../../../utils/rules/unique/unique.mjs';
import { minItems } from '../../../utils/rules/minItems/minItems.mjs';
import { maxItems } from '../../../utils/rules/maxItems/maxItems.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { arrayOf } from '../../../utils/rules/arrayOf/arrayOf.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { useEffect } from '../../../hooks/useEffect/useEffect.mjs';

const array = () => {
    useBlock('path');
    const setRule = useContext(ruleContext);
    const handler = useNewHandler();
    const { children, max, min, unique: unique$1, ...props } = useProps();
    const schema = useSchemaType('array', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    const fieldSchema = {};
    handler[schemaContext.key] = fieldSchema;
    schema.items = fieldSchema;
    if (max) {
        schema.maxItems = max;
    }
    if (min) {
        schema.minItems = min;
    }
    if (unique$1) {
        schema.uniqueItems = unique$1;
    }
    if (setRule && hasRules) {
        let oneOfRulesMap;
        const rules = [];
        const parentRule = useParentRule();
        if (props.default !== undefined) {
            rules.push(defaultTo(props.default));
        }
        if (unique$1) {
            rules.push(unique);
        }
        if (min) {
            rules.push(minItems(min));
        }
        if (max) {
            rules.push(maxItems(max));
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
