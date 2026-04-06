import { useHandler } from 'innet';
import { onDestroy } from 'watch-state';
import '../useServerPlugins/index.es6.js';
import { useServerPlugins } from '../useServerPlugins/useServerPlugins.es6.js';

function useServerPlugin(listener) {
    const plugins = useServerPlugins();
    plugins.set(listener, useHandler());
    onDestroy(() => {
        plugins.delete(listener);
    });
}

export { useServerPlugin };
