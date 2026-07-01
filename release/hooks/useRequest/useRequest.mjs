import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function useRequest() {
    return useAction().req;
}

export { useRequest };
