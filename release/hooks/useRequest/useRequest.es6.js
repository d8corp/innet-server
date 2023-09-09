import '../useAction/index.es6.js';
import { useAction } from '../useAction/useAction.es6.js';

function useRequest() {
    return useAction().req;
}

export { useRequest };
