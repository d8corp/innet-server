import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function useHeaders() {
    return useAction().headers;
}

export { useHeaders };
