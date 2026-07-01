import { useProps } from '@innet/jsx';
import '../../../hooks/index.mjs';
import { useServerPlugin } from '../../../hooks/useServerPlugin/useServerPlugin.mjs';
import { useAction } from '../../../hooks/useAction/useAction.mjs';

function blacklist() {
    const { children, ip = process.env.INNET_BLACKLIST_IP, } = useProps() || {};
    const ips = typeof ip === 'string' ? ip.split(',') : ip;
    useServerPlugin(() => {
        const action = useAction();
        if (!action.clientIp || (ips === null || ips === void 0 ? void 0 : ips.includes(action.clientIp))) {
            return children;
        }
    });
}

export { blacklist };
