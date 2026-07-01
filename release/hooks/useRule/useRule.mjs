import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const ruleContext = new Context(null);
function useSetRule() {
    const setFormatter = useContext(ruleContext);
    if (!setFormatter) {
        useThrow('Use <{type}> inside <endpoint>');
    }
    return setFormatter;
}
function useRule(rule) {
    useSetRule()(rule);
}

export { ruleContext, useRule, useSetRule };
