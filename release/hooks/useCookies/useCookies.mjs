import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function useCookies() {
    return useAction().cookies;
}

export { useCookies };
