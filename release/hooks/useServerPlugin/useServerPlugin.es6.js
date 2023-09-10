import { onDestroy } from 'watch-state';
import '../useServerPlugins/index.es6.js';
import { useServerPlugins } from '../useServerPlugins/useServerPlugins.es6.js';

function useServerPlugin(listener) {
    const requests = useServerPlugins();
    requests.add(listener);
    onDestroy(() => {
        requests.delete(listener);
    });
}

export { useServerPlugin };
