import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const objectRuleContext = new Context(null);
function useObjectRule() {
    const map = useContext(objectRuleContext);
    if (!map) {
        useThrow('Use <{type}> inside <object>');
    }
    return map;
}

export { objectRuleContext, useObjectRule };
