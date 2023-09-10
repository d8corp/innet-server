import { Context, useContext } from '@innet/jsx';
import '../useThrow/index.es6.js';
import { useThrow } from '../useThrow/useThrow.es6.js';

const serverPlugins = new Context();
function useServerPlugins() {
    const plugins = useContext(serverPlugins);
    if (!plugins) {
        useThrow('Use <{type}> in <server>');
    }
    return plugins;
}

export { serverPlugins, useServerPlugins };
