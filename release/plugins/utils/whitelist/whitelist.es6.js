import { useProps, useChildren } from '@innet/jsx';
import '../../../hooks/index.es6.js';
import { useRequestPlugin } from '../../../hooks/useRequestPlugin/useRequestPlugin.es6.js';

function whitelist() {
    const { ip = process.env.WHITELIST_IP, } = useProps() || {};
    const children = useChildren();
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    if (!ips)
        return;
    useRequestPlugin(action => {
        if (!action.clientIp || !ips.includes(action.clientIp)) {
            return children;
        }
    });
}

export { whitelist };
