import { useProps, useContext } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { bodyContext } from '../../../hooks/useBodyContext/useBodyContext.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';

const nullPlugin = () => {
    useBlock('path', 'query', 'cookie', 'header');
    const props = useProps();
    useSchemaType('null', props);
    const isBody = Boolean(useContext(bodyContext));
    const hasRules = !isBody || !props.readOnly;
    if (!hasRules)
        return;
    useRule(nullable);
};

export { nullPlugin };
