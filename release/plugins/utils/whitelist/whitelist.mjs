import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.mjs';
import { useAction } from '../../../hooks/useAction/useAction.mjs';

function whitelist() {
    const { children, ip = process.env.INNET_WHITELIST_IP, } = useProps();
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
