import { useChildren } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.mjs';

const returnPlugin = () => {
    const children = useChildren();
    useServerPlugin(() => children);
};

export { returnPlugin };
