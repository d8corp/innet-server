import innet, { useNewHandler } from 'innet';
import { useContext, useProps, useChildren } from '@innet/jsx';
import { callHandler } from '@innet/utils';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { useParentRule, parentRuleContext } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { arrayOf } from '../../../utils/rules/arrayOf/arrayOf.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';

const array = () => {
    useBlock('path');
    const setRule = useContext(ruleContext);
    const handler = useNewHandler();
    const props = useProps();
    const schema = useSchemaType('array', props);
    const children = useChildren();
    const fieldSchema = {};
    handler[schemaContext.key] = fieldSchema;
    schema.items = fieldSchema;
    if (setRule) {
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
                setRule(rootRule(oneOf(oneOfRulesMap)));
            }
        });
        innet(children, handler);
        innet(() => {
            if (!oneOfRulesMap && setRule) {
                setRule(rootRule(e => e));
            }
        }, callHandler);
        return;
    }
    innet(children, handler);
};

export { array };
