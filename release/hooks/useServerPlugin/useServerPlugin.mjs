import { useHandler } from 'innet';
import { onDestroy } from 'watch-state';
import '../useServerPlugins/index.mjs';
import { useServerPlugins } from '../useServerPlugins/useServerPlugins.mjs';

function useServerPlugin(listener) {
    const plugins = useServerPlugins();
    plugins.set(listener, useHandler());
    onDestroy(() => {
        plugins.delete(listener);
    });
}

export { useServerPlugin };
