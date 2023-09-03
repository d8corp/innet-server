import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { defaultTo } from '../../../utils/rules/defaultTo/defaultTo.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';

const boolean = () => {
    useBlock('path');
    const props = useProps();
    useSchemaType('boolean', props);
    const rules = [];
    if ((props === null || props === void 0 ? void 0 : props.default) !== undefined) {
        rules.push(defaultTo(props.default));
    }
    rules.push(val => val === 'true' || (val === 'false' ? false : Boolean(val)));
    if ((props === null || props === void 0 ? void 0 : props.default) === undefined) {
        const parentRule = useParentRule();
        useRule(parentRule(pipe(...rules)));
    }
    else {
        useRule(pipe(...rules));
    }
};

export { boolean };
