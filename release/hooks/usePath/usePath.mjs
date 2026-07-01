import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function usePath() {
    return useAction().path;
}

export { usePath };
