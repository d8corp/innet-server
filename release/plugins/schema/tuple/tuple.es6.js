import innet, { useNewHandler } from 'innet';
import { useProps, useChildren } from '@innet/jsx';
import { callHandler } from '@innet/utils';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { schemaContext } from '../../../hooks/useSchemaContext/useSchemaContext.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { tupleOf } from '../../../utils/rules/tupleOf/tupleOf.es6.js';
import { useParentRule, parentRuleContext } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useRule, ruleContext } from '../../../hooks/useRule/useRule.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { required } from '../../../utils/rules/required/required.es6.js';

const tuple = () => {
    useBlock('path');
    const handler = useNewHandler();
    const props = useProps();
    const schema = useSchemaType('array', props);
    const children = useChildren();
    if (schema) {
        const schemas = [];
        handler[schemaContext.key] = schemas;
        // @ts-expect-error: FIXME
        schema.prefixItems = schemas;
        const rulesMap = [];
        const rules = [];
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(defaultTo(props.default));
        }
        if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
            rules.push(tupleOf(rulesMap));
        }
        else {
            const parentRule = useParentRule();
            rules.push(parentRule(tupleOf(rulesMap)));
        }
        useRule(pipe(...rules));
        parentRuleContext.set(handler, rule => required(rule));
        ruleContext.set(handler, rule => {
            rulesMap.push(rule);
        });
        innet(children, handler);
        innet(() => {
            if (!rulesMap.length) {
                throw Error('<tuple> MUST have content');
            }
        }, callHandler);
    }
};

export { tuple };
