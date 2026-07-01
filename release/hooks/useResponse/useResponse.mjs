import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function useResponse() {
    return useAction().res;
}

export { useResponse };
