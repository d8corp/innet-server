import '../useAction/index.es6.js';
import { useAction } from '../useAction/useAction.es6.js';

function useClientIp() {
    const action = useAction();
    return action.clientIp;
}

export { useClientIp };
