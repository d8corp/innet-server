import { useAction } from '../useAction/useAction.es6.js';

function useFiles() {
    return useAction().files;
}

export { useFiles };
