import { innet, useHandler } from 'innet';
import { useChildren } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.mjs';

function preset() {
    const children = useChildren();
    useServerPlugin(() => {
        innet(children, useHandler());
    });
}

export { preset };
