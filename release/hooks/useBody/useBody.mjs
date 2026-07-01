import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function useBody() {
    return useAction().body;
}

export { useBody };
