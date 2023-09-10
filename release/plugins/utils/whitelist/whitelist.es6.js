import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.es6.js';
import { useAction } from '../../../hooks/useAction/useAction.es6.js';

function whitelist() {
    const { ip = process.env.WHITELIST_IP, } = useProps() || {};
    const children = useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    if (!ips)
        return;
    useServerPlugin(() => {
        const action = useAction();
        if (!action.clientIp || !ips.includes(action.clientIp)) {
            return children;
        }
    });
}

export { whitelist };
