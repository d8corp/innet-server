import '../useAction/index.mjs';
import '../useThrow/index.mjs';
import { useAction } from '../useAction/useAction.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

function useSearch() {
    const action = useAction();
    if (!action) {
        useThrow('<{type}> MUST be in <return> or <preset>');
    }
    return action.search;
}

export { useSearch };
