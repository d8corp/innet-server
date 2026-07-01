import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../hooks/useParentRule/index.mjs';
import '../../../utils/index.mjs';
import { useBlock } from '../../../hooks/useBlock/useBlock.mjs';
import { useBodyContext, bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { bin } from '../../../utils/rules/bin/bin.mjs';
import { minBin } from '../../../utils/rules/minBin/minBin.mjs';
import { maxBin } from '../../../utils/rules/maxBin/maxBin.mjs';
import { binaryAccept } from '../../../utils/rules/binaryAccept/binaryAccept.mjs';
import { useParentRule } from '../../../hooks/useParentRule/useParentRule.mjs';
import { oneOf } from '../../../utils/rules/oneOf/oneOf.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';
import { pipe } from '../../../utils/rules/pipe/pipe.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';

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
