import { useProps } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import '../../../utils/index.es6.js';
import { useBlock } from '../../../hooks/useBlock/useBlock.es6.js';
import { useSchemaType } from '../../../hooks/useSchemaType/useSchemaType.es6.js';
import { useRule } from '../../../hooks/useRule/useRule.es6.js';
import { nullable } from '../../../utils/rules/nullable/nullable.es6.js';

const nullPlugin = () => {
    useBlock('path', 'query', 'cookie', 'header');
    useSchemaType('null', useProps());
    useRule(nullable);
};

export { nullPlugin };
