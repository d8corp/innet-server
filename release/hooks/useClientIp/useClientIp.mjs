import '../useAction/index.mjs';
import { useAction } from '../useAction/useAction.mjs';

function useClientIp() {
    const action = useAction();
    return action.clientIp;
}

export { useClientIp };
