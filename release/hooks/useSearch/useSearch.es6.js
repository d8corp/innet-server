import '../useAction/index.es6.js';
import '../useThrow/index.es6.js';
import { useAction } from '../useAction/useAction.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

function useSearch() {
    const action = useAction();
    if (!action) {
        useThrow('<{type}> MUST be in <return> or <preset>');
    }
    return action.search;
}

export { useSearch };
