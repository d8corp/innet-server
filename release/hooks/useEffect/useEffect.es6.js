import { innet } from 'innet';
import { callHandler } from '@innet/utils';

function useEffect(effect) {
    innet(effect, callHandler, 1, true);
}

export { useEffect };
