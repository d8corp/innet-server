import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const objectRuleContext = new Context(null);
function useObjectRule() {
    const map = useContext(objectRuleContext);
    if (!map) {
        useThrow('Use <{type}> inside <object>');
    }
    return map;
}

export { objectRuleContext, useObjectRule };
