import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.mjs';
import { useThrow } from '../useThrow/useThrow.mjs';

const serverPlugins = new Context();
function useServerPlugins() {
    const plugins = useContext(serverPlugins);
    if (!plugins) {
        useThrow('Use <{type}> in <server>');
    }
    return plugins;
}

export { serverPlugins, useServerPlugins };
