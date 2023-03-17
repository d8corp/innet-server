import { useAction } from '../useAction/useAction.es6.js';

function useCookies() {
    return useAction().cookies;
}

export { useCookies };
