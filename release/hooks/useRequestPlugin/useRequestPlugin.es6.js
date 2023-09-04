import { onDestroy } from 'watch-state';
import '../useApi/index.es6.js';
import { useApi } from '../useApi/useApi.es6.js';

function useRequestPlugin(listener) {
    const { requestPlugins } = useApi();
    requestPlugins.add(listener);
    onDestroy(() => {
        requestPlugins.delete(listener);
    });
}

export { useRequestPlugin };
