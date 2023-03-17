import { useAction } from '../useAction/useAction.es6.js';

function useSearch() {
    return useAction().search;
}

export { useSearch };
