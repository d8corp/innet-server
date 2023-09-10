import innet, { useHandler } from 'innet';
import { useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';

function preset() {
    const children = useChildren();
    useServerPlugin(() => {
        innet(children, useHandler());
    });
}

export { preset };
