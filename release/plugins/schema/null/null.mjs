import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.mjs';
import '../../../utils/index.mjs';
import { useBlock } from '../../../hooks/useBlock/useBlock.mjs';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.mjs';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.mjs';
import { useRule } from '../../../hooks/useRule/useRule.mjs';
import { nullable } from '../../../utils/rules/nullable/nullable.mjs';

const nullPlugin = () => {
    useBlock('path', 'cookie', 'header');
    const props = useProps();
    useSchemaType('null', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (!hasRules)
        return;
    useRule(nullable);
};

export { nullPlugin };
