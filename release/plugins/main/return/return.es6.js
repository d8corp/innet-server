import { useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';

const returnPlugin = () => {
    const children = useChildren();
    useServerPlugin(() => children);
};

export { returnPlugin };
