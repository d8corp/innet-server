import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

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
