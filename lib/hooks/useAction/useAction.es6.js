import { useHandler } from '@innet/jsx';
import { ACTION } from '../../action/Action/Action.es6.js';

function useAction() {
    return useHandler()[ACTION];
}

export { useAction };
