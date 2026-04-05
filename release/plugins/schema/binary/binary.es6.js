import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../hooks/useParentRule/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useBodyContext, bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { bin } from '../../../utils/rules/bin/bin.es6.js';
import { minBin } from '../../../utils/rules/minBin/minBin.es6.js';
import { maxBin } from '../../../utils/rules/maxBin/maxBin.es6.js';
import { binaryAccept } from '../../../utils/rules/binaryAccept/binaryAccept.es6.js';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.es6.js';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';
import { pipe } from '../../../utils/rules/pipe/pipe.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';

const binary = () => {
    useBlock('path');
    useBodyContext().useFile();
    const props = useProps();
    const schema = useSchemaType('string', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (schema) {
        schema.format = 'binary';
    }
    if (!hasRules)
        return;
    const rules = [];
    rules.push(bin);
    if (props === null || props === void 0 ? void 0 : props.min) {
        rules.push(minBin(props.min));
    }
    if (props === null || props === void 0 ? void 0 : props.max) {
        rules.push(maxBin(props.max));
    }
    if (props === null || props === void 0 ? void 0 : props.accept) {
        rules.push(binaryAccept(props.accept));
    }
    const parentRule = useParentRule();
    const rule = props.nullable ? oneOf([nullable, pipe(...rules)]) : pipe(...rules);
    useRule(parentRule(rule));
};

export { binary };
